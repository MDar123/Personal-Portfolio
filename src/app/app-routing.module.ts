import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

/* Added routing here : */
const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HeroComponent},
{path:'about',component:AboutComponent},
{path:'portfolio',component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
