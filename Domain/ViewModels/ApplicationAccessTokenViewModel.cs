﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.ViewModels
{
    public class ApplicationAccessTokenViewModel
    {        
        public string access_token { get; set; }
        public long expires_in { get; set; }
    }
}
