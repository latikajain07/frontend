import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { RotatorcontrollerComponent } from './header/rotatorcontroller/rotatorcontroller.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeLandingComponent } from './welcome-landing/welcome-landing.component';


import { ServicesComponent } from './services/services.component';

import { Routes,RouterModule } from '@angular/router';
import { ContactComponent } from './welcome-landing/contact/contact.component';
import { WebAppDevelopmentComponent } from './services/web-app-development/web-app-development.component';
import { MobileAppDevelopmentComponent } from './services/mobile-app-development/mobile-app-development.component';
import { SoftwareProductDevelopmentComponent } from './services/software-product-development/software-product-development.component';
import { PortfolioComponent } from './welcome-landing/portfolio/portfolio.component';
import { AboutComponent } from './welcome-landing/about/about.component';
import { CrossPlatformDevelopmentComponent } from './services/cross-platform-development/cross-platform-development.component';
import { DevopsDevelopmentComponent } from './services/devops-development/devops-development.component';
import { ItStrategyConsultingFirmsComponent } from './services/it-strategy-consulting-firms/it-strategy-consulting-firms.component';
import { HireDevelopersComponent } from './hire-developers/hire-developers.component';
import { HireIosDevelopersComponent } from './hire-developers/hire-ios-developers/hire-ios-developers.component';
import { HireAndroidDevelopersComponent } from './hire-developers/hire-android-developers/hire-android-developers.component';
import { HireAngularjsDevelopersComponent } from './hire-developers/hire-angularjs-developers/hire-angularjs-developers.component';
import { HireReactNativeDevelopersComponent } from './hire-developers/hire-react-native-developers/hire-react-native-developers.component';
import { HireIonicDevelopersComponent } from './hire-developers/hire-ionic-developers/hire-ionic-developers.component';
import { HireReactjsDevelopersComponent } from './hire-developers/hire-reactjs-developers/hire-reactjs-developers.component';
import { HireMernStackDevelopersComponent } from './hire-developers/hire-mern-stack-developers/hire-mern-stack-developers.component';
import { HireMeanStackDevelopersComponent } from './hire-developers/hire-mean-stack-developers/hire-mean-stack-developers.component';
import { HireNodejsDevelopersComponent } from './hire-developers/hire-nodejs-developers/hire-nodejs-developers.component';
import { HireVuejsDevelopersComponent } from './hire-developers/hire-vuejs-developers/hire-vuejs-developers.component';
import { HireFrontEndDevelopersComponent } from './hire-developers/hire-front-end-developers/hire-front-end-developers.component';
import { HireDevopsDevelopersComponent } from './hire-developers/hire-devops-developers/hire-devops-developers.component';
import { HireJavaAngularjsDevelopersComponent } from './hire-developers/hire-java-angularjs-developers/hire-java-angularjs-developers.component';
import { BankingFinancialServicesComponent } from './industries/banking-financial-services/banking-financial-services.component';
import { IndustriesComponent } from './industries/industries.component';
import { AutomotiveCompaniesSoftwareDevelopmentComponent } from './industries/automotive-companies-software-development/automotive-companies-software-development.component';
import { LogisticsTransportationSoftwareDevelopmentComponent } from './industries/logistics-transportation-software-development/logistics-transportation-software-development.component';
import { RetailEcommerceSoftwareDevelopmentComponent } from './industries/retail-ecommerce-software-development/retail-ecommerce-software-development.component';
import { EducationElearningSoftwareDevelopmentComponent } from './industries/education-elearning-software-development/education-elearning-software-development.component';
import { MediaSoftwareDevelopmentComponent } from './industries/media-software-development/media-software-development.component';
import { InternProgramsComponent } from './intern-programs/intern-programs.component';
import { FullStackComponent } from './intern-programs/full-stack/full-stack.component';
import { ServerSideDeveloperComponent } from './intern-programs/server-side-developer/server-side-developer.component';
import { FrontEndDeveloperComponent } from './intern-programs/front-end-developer/front-end-developer.component';
import { EnquiryFormComponent } from './enquiry-form/enquiry-form.component';


const appRoutes: Routes = [
  {path: '', component:WelcomeLandingComponent},
  {path: 'home', component:WelcomeLandingComponent},
  {path: 'about', component:AboutComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'services', component:ServicesComponent},
  {path: 'web-app-development', component:WebAppDevelopmentComponent},
  {path: 'mobile-app-development', component:MobileAppDevelopmentComponent},
  {path: 'software-product-development', component:SoftwareProductDevelopmentComponent},
  {path: 'cross-platform-development', component:CrossPlatformDevelopmentComponent},
  {path: 'devops-development', component:DevopsDevelopmentComponent},
  {path: 'it-strategy-consulting-firms', component:ItStrategyConsultingFirmsComponent},
  {path: 'hire-ios-developers', component:HireIosDevelopersComponent},
  {path: 'hire-android-developers', component:HireAndroidDevelopersComponent},
  {path: 'hire-react-native-developers', component:HireReactNativeDevelopersComponent},
  {path: 'hire-reactjs-developers', component:HireReactjsDevelopersComponent},
  {path: 'hire-ionic-developers', component:HireIonicDevelopersComponent},
  {path: 'hire-angularjs-developers', component:HireAngularjsDevelopersComponent},
  {path: 'hire-mern-stack-developers', component:HireMernStackDevelopersComponent},
  {path: 'hire-mean-stack-developers', component:HireMeanStackDevelopersComponent},
  {path: 'hire-nodejs-developers', component:HireNodejsDevelopersComponent},
  {path: 'hire-front-end-developers', component:HireFrontEndDevelopersComponent},
  {path: 'hire-devops-developers', component:HireDevopsDevelopersComponent},
  {path: 'hire-java-angularjs-developers', component:HireJavaAngularjsDevelopersComponent},
  {path: 'banking-financial-services', component:BankingFinancialServicesComponent},
  {path: 'automotive-companies-software-development', component:AutomotiveCompaniesSoftwareDevelopmentComponent},
  {path: 'logistics-transportation-software-development', component:LogisticsTransportationSoftwareDevelopmentComponent},
  {path: 'retail-ecommerce-software-development', component:RetailEcommerceSoftwareDevelopmentComponent},
  {path: 'education-elearning-software-development', component:EducationElearningSoftwareDevelopmentComponent},
  {path: 'media-software-development', component:MediaSoftwareDevelopmentComponent},
  {path: 'Intership-Training', component:FullStackComponent},
  {path: 'enquiry-form', component:EnquiryFormComponent},
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    RotatorcontrollerComponent,
    FooterComponent,
    WelcomeLandingComponent,
    ServicesComponent,   
    ContactComponent, WebAppDevelopmentComponent,
     MobileAppDevelopmentComponent, SoftwareProductDevelopmentComponent, 
     PortfolioComponent, AboutComponent, 
     CrossPlatformDevelopmentComponent, DevopsDevelopmentComponent, 
     ItStrategyConsultingFirmsComponent, HireDevelopersComponent, HireIosDevelopersComponent, HireAndroidDevelopersComponent, HireAngularjsDevelopersComponent, HireReactNativeDevelopersComponent, HireIonicDevelopersComponent, HireReactjsDevelopersComponent, HireMernStackDevelopersComponent, HireMeanStackDevelopersComponent, HireNodejsDevelopersComponent, HireVuejsDevelopersComponent, HireFrontEndDevelopersComponent, HireDevopsDevelopersComponent, HireJavaAngularjsDevelopersComponent, BankingFinancialServicesComponent, IndustriesComponent, AutomotiveCompaniesSoftwareDevelopmentComponent, LogisticsTransportationSoftwareDevelopmentComponent, RetailEcommerceSoftwareDevelopmentComponent, EducationElearningSoftwareDevelopmentComponent, MediaSoftwareDevelopmentComponent, InternProgramsComponent, FullStackComponent, ServerSideDeveloperComponent, FrontEndDeveloperComponent, EnquiryFormComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
