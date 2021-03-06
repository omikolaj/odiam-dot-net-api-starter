﻿using Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;

namespace Domain.Supervisor
{
    public partial class Supervisor : ISupervisor
    {
        public Supervisor(OdmUserManager userManager, ILogger<Supervisor> logger)
        {
            _userManager = userManager;
            _logger = logger;
        }

        private readonly OdmUserManager _userManager;
        private readonly ILogger<Supervisor> _logger;

    }
}
