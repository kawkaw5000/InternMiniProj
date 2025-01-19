'use client';
import '../styles/globals.css';
import styles from '../styles/Hexagon.module.css';
import Image from 'next/image';
import Button from '../components/Button';
import { JSX } from 'react';

export default function HomePage(): JSX.Element {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: 'auto' }}>

        {/* Home */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-none w-11/12 h-3/4 mt-8">
          <div className="flex items-start justify-start gap-5">
            <div className="absolute top-0 flex items-start justify-center gap-5">
              <div className="border border-black w-28 h-96 rounded overflow-hidden relative">
                <Image
                  src="/artImg/1.jpg"
                  alt="file"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border border-black w-20 h-80 rounded overflow-hidden relative">
                <Image
                    src="/artImg/2.jpg"
                    alt="file"
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="border border-black w-14 h-60 rounded overflow-hidden relative">
                <Image
                    src="/artImg/3.jpg"
                    alt="file"
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="border border-black w-11 h-48 rounded overflow-hidden relative">
                <Image
                    src="/artImg/4.jpg"
                    alt="file"
                    fill
                    className="object-cover"
                  />
              </div>
              <div className="border border-black w-11 h-36 rounded overflow-hidden relative">
                <Image
                    src="/artImg/5.jpg"
                    alt="file"
                    fill
                    className="object-cover"
                  />
              </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-start justify-start gap-1">
                <div className="flex gap-2 items-center justify-center">
                  <p style={{fontSize: '1.3rem'}}>Im</p>
                  <h1 className="text-4xl font-bold">Lex</h1>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <p style={{fontSize: '1.3rem'}}>your</p>
                  <h1 className="text-4xl font-bold text-end">Artist</h1>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <h1 className="text-4xl font-bold text-end">UI/UX Designer,</h1>
                  <p style={{fontSize: '1.3rem'}}>and a</p>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <h1 className="text-4xl font-bold text-end">Full-Stack Web Developer</h1>
                </div>
                <div className="flex gap-2 items-center justify-center">
                  <p style={{fontSize: '0.9rem'}}>I Plan, Design and Build your dream website from the ground.</p>
                </div>
                <Button
                  text="Get Started"
                  redirectTo="/about"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <div
                className="flex items-start justify-start gap-5 transform rotate-180 origin-center"
                style={{ transformOrigin: 'center' }}
              >
                <div className="border border-black w-28 h-96 rounded overflow-hidden relative rotate-180 origin-center">
                  <Image
                      src="/artImg/6.jpg"
                      alt="file"
                      fill
                      className="object-cover"
                    />
                </div>
                <div className="border border-black w-20 h-80 rounded overflow-hidden relative rotate-180 origin-center">
                  <Image
                        src="/artImg/7.jpg"
                        alt="file"
                        fill
                        className="object-cover"
                      />
                </div>
                <div className="border border-black w-14 h-60 rounded overflow-hidden relative rotate-180 origin-center">
                  <Image
                      src="/artImg/8.jpg"
                      alt="file"
                      fill
                      className="object-cover"
                    />
                </div>
                <div className="border border-black w-11 h-48 rounded overflow-hidden relative rotate-180 origin-center">
                  <Image
                    src="/artImg/9.jpg"
                    alt="file"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="border border-black w-11 h-36 rounded overflow-hidden relative rotate-180 origin-center">
                <Image
                  src="/artImg/10.jpg"
                  alt="file"
                  fill
                  className="object-cover"
                />
                </div>
              </div>
            </div>
            <div className="absolute -left-44 -top-16">
                <Image
                  src="/mainProfileImg/file.png"
                  alt="file"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
            </div>
        </div> 

        {/* About me */}
        <div style={{ position: 'absolute', top: '140%', left: '50%', transform: 'translate(-50%, -50%)', height: '75%', width: '91.666667%'}}>

          <div style={{ position: 'relative', height: '100%', width: '100%', borderRadius: '10px',border: '1px solid black' }}>
              <div style={{ position: 'absolute', top: '-30px', left:'80px', width: '200px', backgroundColor: 'white'}}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center'}}>About Me</h1>
              </div>

              <div style={{ position: 'absolute', top: '50px', right:'80px'}}>
                <div style={{ height: '300px', width: '240px', borderRadius: '5px', backgroundColor: '#D9D9D9'}}>
                  <Image
                    src="/artImg/1.jpg"
                    alt="file"
                    fill
                    className="object-cover rounded border border-black"
                  />
                </div>
              </div> 
              <div style={{ position: 'absolute', top: '100px', right:'220px'}}>
                <div style={{ height: '300px', width: '240px', borderRadius: '5px', backgroundColor: '#D9D9D9'}}>
                  <Image
                    src="/webImg/web1.png"
                    alt="file"
                    fill
                    className="object-cover rounded border border-black"
                  />
                </div>
              </div>
              <div style={{ position: 'absolute', top: '200px', right:'150px'}}>
                <div style={{ height: '300px', width: '240px', borderRadius: '5px', backgroundColor: '#D9D9D9'}}>
                  <Image
                    src="/mainProfileImg/arts.jpg"
                    alt="file"
                    fill
                    className="object-cover rounded border border-black"
                  />
                </div>
              </div>
          </div>
        </div>

        {/* Services */}
        <div style={{ position: 'absolute', top: '230%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid black', height: '75%', width: '91.666667%', borderRadius: '10px' }}>
          <div style={{ position: 'relative', top: '0px', left:'50%', width: '200px', backgroundColor: 'white', transform: 'translate(-50%, -50%)'}}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center'}}>Services</h1>
          </div>
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: '60px'}}>
            <div style={{height: '380px', width: '380px', borderRadius: '5px', marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
              <div>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 style={{ fontWeight: 'bold', textAlign: 'center'}}>Web Development</h1>
              </div>
              <div>
                <p style={{ textAlign: 'center'}}>
                  I’m a full-stack web developer, skilled in both backend and frontend with the latest frameworks. 
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: '10px'}}>
                <Image
                  src="/skillsIcon/image 5.svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (1).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (2).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (3).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (4).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div style={{height: '380px', width: '380px', borderRadius: '5px', marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
              <div>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 style={{ fontWeight: 'bold', textAlign: 'center'}}>Web Development</h1>
              </div>
              <div>
                <p style={{ textAlign: 'center'}}>
                  I’m a full-stack web developer, skilled in both backend and frontend with the latest frameworks. 
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: '10px'}}>
                <Image
                  src="/skillsIcon/image 5.svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (1).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (2).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (3).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (4).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div style={{height: '380px', width: '380px', borderRadius: '5px', marginTop: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
              <div>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h1 style={{ fontWeight: 'bold', textAlign: 'center'}}>Web Development</h1>
              </div>
              <div>
                <p style={{ textAlign: 'center'}}>
                  I’m a full-stack web developer, skilled in both backend and frontend with the latest frameworks. 
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: '10px'}}>
                <Image
                  src="/skillsIcon/image 5.svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (1).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (2).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (3).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <Image
                  src="/skillsIcon/Vector (4).svg"
                  alt="file"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        
        <div style={{ position: 'absolute', top: '320%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px solid black', height: '75%', width: '91.666667%', borderRadius: '10px' }}>
          <div style={{ position: 'relative', top: '0px', left:'50%', width: '200px', backgroundColor: 'white', transform: 'translate(-50%, -50%)'}}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center'}}>Portfolio</h1>
          </div>
          <div style={{ marginTop: '20px', position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: '60px'}}>
            
            <div style={{position: 'relative',height: '390px', width: '280px', backgroundColor: '#D9D9D9', borderRadius: '5px', border: '1px solid black'}}>
              <Image
                src="/artImg/1.jpg"
                alt="file"
                fill
                className="object-cover rounded border border-black"
              />
            </div>
            
            <div style={{position: 'relative',height: '390px', width: '280px', backgroundColor: '#D9D9D9', borderRadius: '5px', border: '1px solid black'}}>
              <Image
                src="/webImg/web1.png"
                alt="file"
                fill
                className="object-cover rounded border border-black"
              />
            </div>

            <div style={{position: 'relative',height: '390px', width: '280px', backgroundColor: '#D9D9D9', borderRadius: '5px', border: '1px solid black'}}>
            <Image
                src="/webImg/web2.png"
                alt="file"
                fill
                className="object-cover rounded border border-black"
              />
            </div>

            <div style={{position: 'relative',height: '390px', width: '280px', backgroundColor: '#D9D9D9', borderRadius: '5px', border: '1px solid black'}}>
              <Image
                src="/artImg/2.jpg"
                alt="file"
                fill
                className="object-cover rounded border border-black"
              />
            </div>
          </div>
      
        </div>

        {/* Contact */}
        <div style={{ position: 'absolute', top: '410%', left: '21.7%', transform: 'translate(-50%, -50%)', border: '1px solid black', height: '75%', width: '35%', borderRadius: '10px'}}>
          <div style={{ position: 'relative', top: '0px', left:'50%', width: '230px', backgroundColor: 'white', transform: 'translate(-50%, -50%)'}}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center'}}>Contact Me</h1>
            </div>
            <div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'start', 
              gap: '40px',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                gap: '80px',
                marginTop: '30px',
              }}
            >
            <div 
              style={{
                position: 'relative',
              }}>
                <input
                  type="text"
                  placeholder=""
                  style={{
                    width: '280px',
                    height: '30px',
                    border: 'none',
                    borderBottom: '2px solid #000',
                    outline: 'none',
                    padding: '5px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.target.style.borderBottom = '2px solid #007BFF')} 
                  onBlur={(e) => (e.target.style.borderBottom = '2px solid #000')} />
                <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                }}>
                  <span
                  style={{
                    fontSize: '1.1rem',
                  }}>
                    Full Name
                  </span>
                </div>
            </div>

            <div 
              style={{
                position: 'relative',
              }}>
                <input
                  type="text"
                  placeholder=""
                  style={{
                    width: '280px',
                    height: '30px',
                    border: 'none',
                    borderBottom: '2px solid #000',
                    outline: 'none',
                    padding: '5px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.target.style.borderBottom = '2px solid #007BFF')} 
                  onBlur={(e) => (e.target.style.borderBottom = '2px solid #000')} />
                <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                }}>
                  <span
                  style={{
                    fontSize: '1.1rem',
                  }}>
                    Email
                  </span>
                </div>
            </div>

            <div 
              style={{
                position: 'relative',
              }}>
                <input
                  type="text"
                  placeholder=""
                  style={{
                    width: '280px',
                    height: '30px',
                    border: 'none',
                    borderBottom: '2px solid #000',
                    outline: 'none',
                    padding: '5px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={(e) => (e.target.style.borderBottom = '2px solid #007BFF')} 
                  onBlur={(e) => (e.target.style.borderBottom = '2px solid #000')} />
                <div
                style={{
                  position: 'absolute',
                  top: '-30px',
                }}>
                  <span
                  style={{
                    fontSize: '1.1rem',
                  }}>
                    Message
                  </span>
                </div>
            </div>
            
            <button className="px-4 py-2 bg-black text-white rounded-3xl hover:bg-gray-900 w-full">
              Submit
            </button>
            <div style={{
            position: 'absolute',
            top: '-90px',
            right: '-760px',
            width: '190%',
            height: '141%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
            }}>
              <div className={styles.hex}>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
              <div className={styles.hex}>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div style={{
            position: 'absolute',
            top: '-90px',
            right: '-900px',
            width: '190%',
            height: '141%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
            }}>
              <div className={styles.hex}>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
              <div className={styles.hex}>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
              <div className={styles.hex}>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div style={{
            position: 'absolute',
            top: '-90px',
            right: '-1040px',
            width: '190%',
            height: '141%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px'
            }}>
              <div className={styles.hex}>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
              <div className={styles.hex}>
                <Image
                  src="/serviceIcon/streamline_web.svg"
                  alt="file"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>         
        </div>
             
        </div>

        <div style={{ position: 'absolute',top: '418%', left: '29.2%', transform: 'translate(-50%, -50%)', height: '75%', width: '50%', pointerEvents: 'none', visibility: 'hidden'}}>
        </div>
    </div> 
  );
}


