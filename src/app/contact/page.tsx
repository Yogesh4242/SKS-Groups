import Image from "next/image";
import heroimage from "../assets/hero-image.jpg";
import {
  Phone,
  Mail,
  Send,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
} from "lucide-react";



export default function Home() {
  
  return (
    // Outer container to center the "mobile frame" on desktop
    <div className="min-h-screen flex items-center justify-center bg-[#EDE8D0] p-0 sm:p-4">
      
      <div
  className="
    relative
    w-full h-screen
    sm:h-[96vh] sm:w-auto sm:aspect-[9/16]
    sm:max-h-[900px]
    sm:rounded-[2.5rem]
    overflow-hidden
    flex flex-col
    sm:shadow-2xl
  "
  style={{ backgroundColor: "#000000" }}
>

        {/* ---------- HERO SECTION ---------- */}
        <section className="relative w-full h-[35%] shrink-0">
          <Image
            src={heroimage}
            alt="SKS Groups Hero"
            className="w-full h-full object-cover"
            
          />
          {/* Gradients for text legibility and "classy" blending */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#273e06]/20 via-transparent to-[#000000]" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center pb-17 ">
            <h1 className="text-[#EDE8f0] text-3xl font-bold tracking-[0.3em] font-serif drop-shadow-md">
              SKS GROUPS
            </h1>

            <h3 className="text-[#EDE8f0]  font-semibold  font-serif drop-shadow-md">
              Infrastructure · Construction · Consulting
            </h3>
            <div className="w-12 h-[2px] bg-[#EDE8f0] mt-2 animate-pulse " />
          </div>
        </section>

        {/* ---------- CONTENT & ACTION SECTION ---------- */}
        <section className="flex-1 
        px-4 py-3        /* Mobile padding */
        sm:px-8 sm:py-4  /* Desktop / larger screens */ 
       flex flex-col justify-between">

          {/* Social Icons */}
            <div className="flex justify-center sm:gap-10 gap-8 text-[#996514] ">
              <a href="https://www.linkedin.com/in/SKSGroup9972/" className="hover:text-[#EDE8D0] transition-colors" target="_blank"><Linkedin size={22} /></a>
              <a href="https://www.instagram.com/sksgroupinfra/?utm_source=ig_web_button_share_sheet" className="hover:text-[#EDE8D0] transition-colors" target="_blank"><Instagram size={22} /></a>
              <a href="https://t.me/SKSGroup9972" className="hover:text-[#EDE8D0] transition-colors" target="_blank"><Send size={22} /></a>
              <a href="https://maps.app.goo.gl/zj7aDwwFo5jvLHxG7" className="hover:text-[#EDE8D0] transition-colors" target="_blank"><MapPin size={22} /></a>
            </div>

          
          {/* Action Buttons Container */}
          <div className="space-y-4 w-full ">
            <a
              href="tel:+918190923665"
              className="group flex items-center justify-between w-full h-14 px-6 rounded-full bg-[#765341] text-[#EDE8D0] transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              <span className="font-semibold tracking-wide">Call Now</span>
              <Phone size={18} className="opacity-80 group-hover:rotate-12 transition-transform" />
            </a>

            <a
              href="https://wa.me/8190923665"
              target="_blank"
              className="group flex items-center justify-between w-full h-14 px-6 rounded-full bg-[#996514] text-[#EDE8D0] transition-all hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              <span className="font-semibold tracking-wide">WhatsApp Us</span>
              <MessageCircle size={18} className="opacity-80 group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="mailto:sksgroupinfra@gmail.com"
              className="group flex items-center justify-between w-full h-14 px-6 rounded-full border border-[#996514] text-[#EDE8D0] hover:bg-[#996514]/10 transition-all active:scale-95"
            >
              <span className="font-semibold tracking-wide">Send Email</span>
              <Mail size={18} className="opacity-80" />
            </a>
          </div>

                      
          {/* Map & Office Info Section */}
    <div className="space-y-6">
  <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-lg">
    <iframe
      title="SKS Groups Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.07885882704!2d80.20867324999999!3d13.04752545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766543260134!5m2!1sen!2sin"
      className="w-full h-40 opacity-80 transition-all duration-500 hover:grayscale-0 opacity-100"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    {/* Soft gradient overlay */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

    {/* Label */}
    <div className="absolute bottom-2 left-1 rounded-lg bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
      SKS-Groups · Chennai
    </div>
    
 

    </div>

            <div className="text-center space-y-1">
              <p className="text-[#EDE8D0]/60 text-[10px] uppercase tracking-[0.2em]">Based in Chennai</p>
              <p className="text-[#EDE8D0] text-xs font-light">Mon - Sat: 9:00 AM – 5:00 PM</p>
            </div>

            
          </div>
        </section>

        {/* Bottom Decorative Bar */}
      </div>
    </div>
  );
} 