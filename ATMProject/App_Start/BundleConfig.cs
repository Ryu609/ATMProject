using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace ATMProject
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/css")
                .Include("~/Content/Site.css")
                .Include("~/Content/ui-bootstrap-csp.css")
                .Include("~/Content/Bootstrap.min.css"));

          

            bundles.Add(new ScriptBundle("~/bundles/Angular")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-messages.js")
                .IncludeDirectory("~/Scripts/AngularUI", "*.js"));


            bundles.Add(new ScriptBundle("~/bundles/Bootstrap")
                .IncludeDirectory("~/Scripts/angular-ui", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/ATMProject")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .IncludeDirectory("~/Scripts/Factories", "*.js")
                .Include("~/Scripts/ATMProject.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}