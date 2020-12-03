using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Events;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Override("Microsoft.AspNetCore", LogEventLevel.Warning)
                .Enrich.FromLogContext()
                .WriteTo.Console()               
                .WriteTo.File(Path.Combine(Directory.GetCurrentDirectory(), "api-logs.txt"))
                .MinimumLevel.Verbose()
                .CreateLogger();

            try
            {
                CreateHostBuilder(args).Build().Run();
            }
            catch(Exception ex)
            {
                Log.Fatal(ex, "Application start-up failed.");
                throw;
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IHostBuilder CreateHostBuilder(string[] args)
        {
            

            try
            {
                return Host.CreateDefaultBuilder(args)
                           .UseSerilog()
                           .ConfigureWebHostDefaults(webBuilder =>
                           {
                                webBuilder.UseStartup<Startup>();
                           });
            }
            catch(Exception ex)
            {
                Log.Fatal(ex, "Host builder error.");
                throw;
            }
        }
            
    }
}
