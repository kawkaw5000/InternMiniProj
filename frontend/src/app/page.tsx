'use client';
import '../styles/globals.css'
import Button from '../components/Button';

export default function HomePage() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black flex flex-col items-center justify-center w-11/12 h-3/4">
      <div className="">
        <h2>Welcome to My Website</h2>
        <p>This is the homepage content.</p>
        <Button text="Go to About" redirectTo="/about" />
        <Button text="Go to Contact" redirectTo="/contact" />
      </div>
    </div>
  );
}
