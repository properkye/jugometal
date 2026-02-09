"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdEmail, MdLock } from "react-icons/md";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();

  // Load saved email if remember me was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error: signInError } = await signIn(email, password);

    if (signInError) {
      console.log("Login error:", signInError);
      if (signInError.message === "Invalid login credentials") {
        setError("Pogrešan email ili lozinka");
      } else if (signInError.message.includes("Email not confirmed")) {
        setError("Email nije potvrđen. Proverite svoj inbox.");
      } else {
        setError(signInError.message || "Greška pri prijavljivanju");
      }
      setLoading(false);
    } else {
      // Save email if remember me is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
      } else {
        localStorage.removeItem("rememberedEmail");
      }
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full space-y-8">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Prijavite se
            </h1>
          </div>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Email adresa
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdEmail className="text-gray-400" size={20} />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vasemail@email.com"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                Lozinka
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdLock className="text-gray-400" size={20} />
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white text-gray-900"
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Zapamti me
              </label>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Prijavljivanje..." : "Prijavite se"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Promo Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-white items-center justify-center p-12">
        <div className="w-full max-w-2xl h-[calc(100vh-6rem)] bg-[#0a0a0a] rounded-3xl p-12 relative overflow-hidden shadow-2xl">
          {/* Diagonal Line Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-full h-full">
              <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] border-r-[150px] border-t-[150px] border-gray-800/30 rotate-45 origin-top-right"></div>
            </div>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center space-y-8">
            {/* Logo */}
            <div className="flex justify-start mb-8">
              <Image 
                src="/logo.png" 
                alt="Jugometal" 
                width={340}
                height={170}
                className="object-contain"
                priority
              />
            </div>

            {/* Main Heading and Description */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white leading-tight">
                Welcome to Jugometal
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Jugometal pomaže vam da upravljate proizvodima i kreirate organizovane kataloge pun lepih i bogatih modula. Pridružite se i započnite izgradnju vaše aplikacije danas.
              </p>
            </div>

            {/* Bottom Card */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2 leading-tight">
                Upravljajte proizvodima na pravom mestu
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                Budite među prvima koji će doživeti najlakši način za upravljanje traktrorima, priključnim mašinama i rezervnim delovima.
              </p>
              
              {/* Avatar Group */}
              <div className="flex -space-x-2 justify-end">
                <div className="w-7 h-7 rounded-full bg-gray-600 border-2 border-[#1a1a1a] flex items-center justify-center text-white text-xs font-semibold">
                  A
                </div>
                <div className="w-7 h-7 rounded-full bg-gray-700 border-2 border-[#1a1a1a] flex items-center justify-center text-white text-xs font-semibold">
                  B
                </div>
                <div className="w-7 h-7 rounded-full bg-gray-500 border-2 border-[#1a1a1a] flex items-center justify-center text-white text-xs font-semibold">
                  C
                </div>
                <div className="w-7 h-7 rounded-full bg-gray-600 border-2 border-[#1a1a1a] flex items-center justify-center text-white text-xs font-semibold">
                  D
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
