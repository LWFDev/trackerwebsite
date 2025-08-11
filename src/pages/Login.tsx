import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import { Link } from "react-router-dom";
import PageSEO from "@/components/seo/PageSEO";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <PageSEO
        seo={{
          title: "Login - Tracker Systems",
          description: "Secure login to your Tracker Systems account.",
          keywords: "tracker login",
          canonical: "https://tracker-systems.com/login",
          robots: "noindex, nofollow"
        }}
      />
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold text-gold-gradient">
              Track My Business
            </h1>
          </Link>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
