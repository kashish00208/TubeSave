"use client"
import React, { useState, useEffect, useRef, Suspense, lazy, ReactNode } from "react";
import MainPage from "../Components/Home";
import Footer from "../Components/footer";

const LazyWhyUs = lazy(() => import("@/Components/WhyUs"));
const LazyHowItWorks = lazy(()=>import("@/Components/HowItWorks"))

function LazyLoadOnView({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: "100px" }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return <div ref={ref}>{show ? children : null}</div>;
}

export default function Home() {
  return (
    <>
      <MainPage />

      <div id="howItworks">
        <LazyLoadOnView>
          <Suspense fallback={<div>Loading HowItWorks...</div>}>
            <LazyHowItWorks />
          </Suspense>
        </LazyLoadOnView>
      </div>

      <div id="faq">
        <LazyLoadOnView>
          <Suspense fallback={<div>Loading WhyUs...</div>}>
            <LazyWhyUs />
          </Suspense>
        </LazyLoadOnView>
      </div>

      <Footer />
    </>
  );
}
