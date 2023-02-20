import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SudanComponent } from './components/sudan/sudan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sudan',
    component: SudanComponent,
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./components/cart/cart.module').then(mod => mod.CartModule)
  },
  {
    path: 'watch-list',
    loadChildren: () => import('./components/watch-list/watch-list.module').then(mod => mod.WatchListModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./components/order/order.module').then(mod => mod.OrderModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then(mod => mod.MoviesModule)
  },
  {
    path: 'plays',
    loadChildren: () => import('./components/plays/plays.module').then(mod => mod.PlaysModule)
  },
  {
    path: 'plays/:id', loadChildren: () => import('./components/play-details/play-details.module').then(mod => mod.PlayDetailsModule)
  },
  {
    path: 'movies/:id', loadChildren: () => import('./components/movie-details/movie-details.module').then(mod => mod.MovieDetailsModule)
  },

  {
    path: 'tv',
    loadChildren: () => import('./components/tv-shows/tv-shows.module').then(mod => mod.TvShowsModule)
  },

  {
    path: 'tv/:id',
    loadChildren: () => import('./components/tv-show-details/tv-show-details.module').then(mod => mod.TvShowDetailsModule)
  },
  {
    path: 'order/:id',
    loadChildren: () => import('./components/order-details/order-details.module').then(mod => mod.OrderDetailsModule)
  },

  {
    path: 'genres/:id/:name',
    loadChildren: () => import('./components/genre/genre.module').then(mod => mod.GenreModule)
  },

  {
    path: 'genres',
    loadChildren: () => import('./components/genre-list/genre-list.module').then(mod => mod.GenreListModule)
  },

  {
    path: 'person/:id',
    loadChildren: () => import('./components/person/person.module').then(mod => mod.PersonModule)
  },

  {
    path: 'genres-tv/:id/:name',
    loadChildren: () => import('./components/tv-genre/tv-genre.module').then(m => m.TvGenreModule)
  },
  {
    path: 'movieex/wp-admin/admin-login',
    loadChildren: () => import('./components/admin/adminlogin/adminlogin.module').then(m => m.AdminLoginModule)
  },
  {
    path: 'movieex/wp-admin/admin-dashboard',
    loadChildren: () => import('./components/admin/admindashboard/admindashboard.module').then(m => m.AdmindashboardModule)
  },
  {
    path: 'movieex/wp-admin/admin-search-movies',
    loadChildren: () => import('./components/admin/searchmovies/searchmovies.module').then(m => m.SearchMoviesModule)
  },
  {
    path: 'movieex/wp-admin/admin-search-movies/:id',
    loadChildren: () => import('./components/admin/searchmovies-details/searchmovie-details.module').then(m => m.SearchMovieDetailsModule)
  },
  {
    path: 'movieex/wp-admin/admin-search-tvs',
    loadChildren: () => import('./components/admin/searchtvs/searchtvs.module').then(m => m.SearchTvsModule)
  },
  {
    path: 'movieex/wp-admin/admin-search-tvs/:id',
    loadChildren: () => import('./components/admin/searchtvs-details/searchtvs-details.module').then(m => m.SearchTvsDetailsModule)
  },
  {
    path: 'movieex/wp-admin/movies',
    loadChildren: () => import('./components/admin/moviescatalouge/moviescatalouge.module').then(m => m.MoviesCatalougeModule)
  },
  {
    path: 'movieex/wp-admin/admin-movies/:id',
    loadChildren: () => import('./components/admin/moviescatalouge-details/moviescatalouge-details.module').then(m => m.MovieCatalougeDetailsModule)
  },
  {
    path: 'movieex/wp-admin/tvs',
    loadChildren: () => import('./components/admin/tvscatalouge/tvscatalouge.module').then(m => m.TvsCatalougeModule)
  },
  {
    path: 'movieex/wp-admin/admin-tvs/:id',
    loadChildren: () => import('./components/admin/tvscatalouge-details/tvscatalouge-details.module').then(m => m.TvsCatalougeDetailsModule)
  },
  {
    path: 'movieex/wp-admin/plays',
    loadChildren: () => import('./components/admin/playscatalouge/playscatalouge.module').then(m => m.PlaysCatalougeModule)
  },
  {
    path: 'movieex/wp-admin/admin/plays/add',
    loadChildren: () => import('./components/admin/addplay/addplay.module').then(m => m.AddPlayModule)
  },
  {
    path: 'movieex/wp-admin/admin/plays/:id',
    loadChildren: () => import('./components/admin/playscatalouge-details/playscatalouge-details.module').then(m => m.PlaycatalougeDetailsModule)
  },

  {
    path: 'movieex/wp-admin/admin-sd-tvs',
    loadChildren: () => import('./components/admin/sudan/adminsudantv/adminsudantv.module').then(m => m.AdminSudanTvModule)
  },
  
  {
    path: 'movieex/wp-admin/admin-sd-plays',
    loadChildren: () => import('./components/admin/sudan/adminsudanplay/adminsudanplay.module').then(m => m.AdminSudanPlayModule)
  },
  {
    path: 'movieex/wp-admin/admin-sd-movies',
    loadChildren: () => import('./components/admin/sudan/adminsudanmovie/adminsudanmovie.module').then(m => m.AdminSudanMovieModule)
  },

  {
    path: 'movieex/wp-admin/admin-sd-tvs/add',
    loadChildren: () => import('./components/admin/sudan/addsudantv/addsudantv.module').then(m => m.AddsudantvModule)
  },
  
  {
    path: 'movieex/wp-admin/admin-sd-plays/add',
    loadChildren: () => import('./components/admin/sudan/addsudanplay/addsudanplay.module').then(m => m.AddsudanPlayModule)
  },
  {
    path: 'movieex/wp-admin/admin-sd-movies/add',
    loadChildren: () => import('./components/admin/sudan/addsudanmovie/addsudanmovie.module').then(m => m.AddsudanmovieModule)
  },
  {
    path: 'movieex/wp-admin/admin-sd-movies/:id', loadChildren: () => import('./components/admin/sudan/adminsudanmovie-details/adminsudanmovie-details.module').then(mod => mod.AdminSudanMovieDetailsModule)
  },
  {
    path: 'movieex/wp-admin/admin-sd-tvs/:id', loadChildren: () => import('./components/admin/sudan/adminsudantv-details/adminsudantv-details.module').then(mod => mod.AdminSudanTvDetailsModule)
  },
  {
    path: 'movieex/wp-admin/admin-sd-plays/:id', loadChildren: () => import('./components/admin/sudan/adminsudanplay-details/adminsudanplay-details.module').then(mod => mod.AdminSudanPlayDetailsModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
