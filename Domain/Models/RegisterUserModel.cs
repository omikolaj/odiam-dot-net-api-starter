﻿using System.Runtime.Serialization;

namespace Domain.ViewModels
{
    [DataContract]
    public class RegisterUserModel
    {
        [DataMember(Name = "email", EmitDefaultValue = false)]
        public string Email { get; set; }

        [DataMember(Name = "password", EmitDefaultValue = false)]
        public string Password { get; set; }
    }
}
