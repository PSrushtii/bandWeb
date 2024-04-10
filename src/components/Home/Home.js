import React ,{lazy, Suspense } from 'react';
const Hero = lazy(() => import('./HeroSection'));
const Gal = lazy(() => import('./GalleryRes'));
const Men = lazy(() => import('./Albums'));
const Foot = lazy(() => import('./Footer'));

function Home() {

  return (
    <>
      <Suspense><Hero/></Suspense>
      <Suspense><Gal/></Suspense>
      <Suspense><Men/></Suspense>
      <Suspense><Foot/></Suspense>
    </>
    
  );
}

export default Home