﻿using API.Authentication;
using API.Authentication.Jwt;
using Domain.Models;
using Domain.Supervisor;
using Domain.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Serilog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [AllowAnonymous]
    public class AuthController : APIControllerBase
    {
        public AuthController(
            ISupervisor supervisor, 
            IAccessTokenGenerator tokenGenerator, 
            IClaimsIdentityService claimsIdentityService,
            IJwtFactory jwtFactory,
            IOptions<JwtIssuerOptions> jwtOptions,
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            ILogger<AuthController> logger)
        {
            _supervisor = supervisor;
            _tokenGenerator = tokenGenerator;
            _claimsIdentityService = claimsIdentityService;
            _jwtOptions = jwtOptions.Value;
            _jwtFactory = jwtFactory;
            _userManager = userManager;
            _roleManager = roleManager;            
            _logger = logger;
        }

        private readonly ISupervisor _supervisor;
        private readonly IAccessTokenGenerator _tokenGenerator;
        private readonly IClaimsIdentityService _claimsIdentityService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JwtIssuerOptions _jwtOptions;
        private readonly ILogger<AuthController> _logger;

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginUserModel login, CancellationToken ct = default)
        {
            if (string.IsNullOrEmpty(login.Password)) 
            {
                return Unauthorized_InvalidCredentials();
            }

            ApplicationUser appUser = await _userManager.FindByEmailAsync(login.Email);

            if(appUser == null)
            {
                return Unauthorized_InvalidCredentials();
            }

            if (ct.IsCancellationRequested)
                ct.ThrowIfCancellationRequested();

            if(await _userManager.CheckPasswordAsync(appUser, login.Password) == false)
            {
                return Unauthorized_InvalidCredentials();
            }

            ClaimsIdentity claimsIdentity = await _claimsIdentityService.GenerateClaimsIdentityAsync(appUser);

            ApplicationAccessToken accessToken = await _tokenGenerator.GenerateApplicationTokenAsync(appUser.Id, claimsIdentity, _jwtFactory, _jwtOptions);

            return Ok(accessToken);
        }

        [HttpPost]
        [Route("signup")]
        public async Task<IActionResult> SignUp([FromBody] RegisterUserModel registerModel, CancellationToken ct = default)
        {
            _logger.LogDebug("Signup action executed.");

            ApplicationUser newUser = new ApplicationUser
            {
                Email = registerModel.Email,
                UserName = registerModel.Email
            };

            if (ct.IsCancellationRequested)
                ct.ThrowIfCancellationRequested();

            IdentityResult result = await _userManager.CreateAsync(newUser, registerModel.Password);

            if (result.Succeeded == false)
            {
                _logger.LogError("User registration data is invalid or missing.");

                return BadRequest_UserNotCreated(result.Errors);
            }

            ApplicationUser registeredUser = await _userManager.FindByEmailAsync(registerModel.Email);

            if(registeredUser == null)
            {
                _logger.LogError($"Unable to find user by email: { registerModel.Email }. Attempted to retrieve newly registered user to generate access token.");

                return BadRequest_UserRegistrationError();
            }

            ClaimsIdentity claimsIdentity = await _claimsIdentityService.GenerateClaimsIdentityAsync(registeredUser);

            ApplicationAccessToken accessToken = await _tokenGenerator.GenerateApplicationTokenAsync(registeredUser.Id, claimsIdentity, _jwtFactory, _jwtOptions);

            return Ok(accessToken);
        }
    }
}
