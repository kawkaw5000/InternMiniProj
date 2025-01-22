/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import '../styles/globals.css';
import styles from '../styles/Hexagon.module.css';
import hover from '../styles/homeStyle.module.css'
import Image from 'next/image';
import Button from '../components/Button';
import { JSX, useEffect, useState  } from 'react';
import { homeApi } from '@/api/homeApi';
import { aboutApi } from '@/api/aboutApi';

export default function HomePage(): JSX.Element {
  const [ImgBox1, setImgBox1] = useState<string | null>(null);
  const [ImgBox2, setImgBox2] = useState<string | null>(null);
  const [ImgBox3, setImgBox3] = useState<string | null>(null);
  const [ImgBox4, setImgBox4] = useState<string | null>(null);
  const [ImgBox5, setImgBox5] = useState<string | null>(null);
  const [ImgBox6, setImgBox6] = useState<string | null>(null);
  const [ImgBox7, setImgBox7] = useState<string | null>(null);
  const [ImgBox8, setImgBox8] = useState<string | null>(null);
  const [ImgBox9, setImgBox9] = useState<string | null>(null);
  const [ImgBox10, setImgBox10] = useState<string | null>(null);
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);
  const [file5, setFile5] = useState<File | null>(null);
  const [file6, setFile6] = useState<File | null>(null);
  const [file7, setFile7] = useState<File | null>(null);
  const [file8, setFile8] = useState<File | null>(null);
  const [file9, setFile9] = useState<File | null>(null);
  const [file10, setFile10] = useState<File | null>(null);
  const [userHomeId, setUserHomeId] = useState<number | null>(null);
  const [ImgAbout1, setImgAbout1] = useState<string | null>(null);
  const [ImgAbout2, setImgAbout2] = useState<string | null>(null);
  const [ImgAbout3, setImgAbout3] = useState<string | null>(null);
  const [aboutFile1, setAboutFile1] = useState<File | null>(null);
  const [aboutFile2, setAboutFile2] = useState<File | null>(null);
  const [aboutFile3, setAboutFile3] = useState<File | null>(null);
  const [userAboutId, setUserAboutId] = useState<number | null>(null);
  const [isModalCreateServicesOpen, setIsModalCreateServicesOpen] = useState(false);

  const togleModalCreateServices = () => {
    setIsModalCreateServicesOpen(!isModalCreateServicesOpen);
  };

  const fetchHomeData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const data = await homeApi.getUserHome();
      console.log('Fetched Home Data:', data);
  
      if (!data.homes || data.homes.length === 0) {
        throw new Error('No home data found.');
      }
  
      const home = data.homes[0];
  
      setImgBox1(home.ImgBox1 || null);
      setImgBox2(home.ImgBox2 || null);
      setImgBox3(home.ImgBox3 || null);
      setImgBox4(home.ImgBox4 || null);
      setImgBox5(home.ImgBox5 || null);
      setImgBox6(home.ImgBox6 || null);
      setImgBox7(home.ImgBox7 || null);
      setImgBox8(home.ImgBox8 || null);
      setImgBox9(home.ImgBox9 || null);
      setImgBox10(home.ImgBox10 || null);
      setUserHomeId(home.UserHomeId);
    } catch (error) {
      console.error('Error fetching home data:', error);
    }
  };

  const fetchAboutData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const data = await aboutApi.getUserAbout();
      console.log('Fetched About Data:', data);
  
      if (!data.aboutList || data.aboutList.length === 0) {
        throw new Error('No about page data found.');
      }
  
      const about = data.aboutList[0];
  
      setImgAbout1(about.ImgAbout1 || null);
      setImgAbout2(about.ImgAbout2 || null);
      setImgAbout3(about.ImgAbout3 || null);
      setUserAboutId(about.UserAboutId);
    } catch (error) {
      console.error('Error fetching about data:', error);
    }
  };

  const handleFileChange = (index: number, file: File | null) => {
    console.log(`File selected at index ${index}:`, file);
  
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;

        switch (index) {
          case 0:
            setFile1(file);
            setImgBox1(imageUrl);
            break;
          case 1:
            setFile2(file);
            setImgBox2(imageUrl);
            break;
          case 2:
            setFile3(file);
            setImgBox3(imageUrl);
            break;
          case 3:
            setFile4(file);
            setImgBox4(imageUrl);
            break;
          case 4:
            setFile5(file);
            setImgBox5(imageUrl);
            break;
          case 5:
            setFile6(file);
            setImgBox6(imageUrl);
            break;
          case 6:
            setFile7(file);
            setImgBox7(imageUrl);
            break;
          case 7:
            setFile8(file);
            setImgBox8(imageUrl);
            break;
          case 8:
            setFile9(file);
            setImgBox9(imageUrl);
            break;
          case 9:
            setFile10(file);
            setImgBox10(imageUrl);
            break;
          default:
            console.warn(`Invalid index: ${index}`);
            break;
        }
      };
  
      reader.readAsDataURL(file);
    }
  };

  const handleAboutFileChange = (index: number, file: File | null) => {
    console.log(`File selected at index ${index}:`, file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;

        switch (index) {
          case 0:
            setAboutFile1(file);
            setImgAbout1(imageUrl);
            break;
          case 1:
            setAboutFile2(file);
            setImgAbout2(imageUrl);
            break;
          case 2:
            setAboutFile3(file);
            setImgAbout3(imageUrl);
            break;
          default:
            console.warn(`Invalid index: ${index}`);
            break;
        }
      };

      reader.readAsDataURL(file);
    }
  };
  
  const handleUpdate = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('No authentication token found.');
      return;
    }
  
    const formData = new FormData();
  
    formData.append('ImgBox1', file1 || ImgBox1 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox2', file2 || ImgBox2 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox3', file3 || ImgBox3 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox4', file4 || ImgBox4 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox5', file5 || ImgBox5 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox6', file6 || ImgBox6 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox7', file7 || ImgBox7 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox8', file8 || ImgBox8 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox9', file9 || ImgBox9 || '/HomeUploads/blankimage.png');
    formData.append('ImgBox10', file10 || ImgBox10 || '/HomeUploads/blankimage.png');
    formData.append('UserHomeId', userHomeId?.toString() || '');
  
    homeApi
      .updateHome(formData, token)
      .then((response) => {
        console.log('Update successful:', response);
      })
      .catch((error) => {
        console.error('Update error:', error.message);
      });
  };
  
  const handleAboutUpdate = () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      console.error('No authentication token found.');
      return;
    }

    const formData = new FormData();

    formData.append('ImgAbout1', aboutFile1 || ImgAbout1 || '/HomeUploads/blankimage.png');
    formData.append('ImgAbout2', aboutFile2 || ImgAbout2 || '/HomeUploads/blankimage.png');
    formData.append('ImgAbout3', aboutFile3 || ImgAbout3 || '/HomeUploads/blankimage.png');
    formData.append('UserAboutId', userAboutId?.toString() || '');

    aboutApi
      .updateAbout(formData, token)
      .then((response) => {
        console.log('Update successful:', response);
      })
      .catch((error) => {
        console.error('Update error:', error.message);
      });
  };
  
  useEffect(() => {
    fetchAboutData();
    fetchHomeData();
    
  }, []);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: 'auto' }}>

        {/* Home */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-none w-11/12 h-3/4 mt-8">
          <div className="flex items-start justify-start gap-5">
            <div className="absolute top-0 flex items-start justify-center gap-5">
              <div className="border border-black w-28 h-96 rounded overflow-hidden relative">
                <Image
                  src={ImgBox1 || '/HomeUploads/blankimage.png'}
                  alt="file"
                  fill
                  className="object-cover"
                />
                <div>
                  <label className={hover.label1}
                  htmlFor="fileUploadImgBox1"       
                  >
                  <input
                    id="fileUploadImgBox1"
                    type="file"
                    style={{ display: 'none' }} 
                    onChange={(e) => handleFileChange(0, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
              </div>
              <div className="border border-black w-20 h-80 rounded overflow-hidden relative">
                <Image
                    src={ImgBox2 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover"
                  />
                  <div>
                  <label className={hover.label2}
                  htmlFor="fileUploadImgBox2"       
                  >
                  <input
                    id="fileUploadImgBox2"
                    type="file"
                    style={{ display: 'none' }}   
                    onChange={(e) => handleFileChange(1, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
               
              </div>
              <div className="border border-black w-14 h-60 rounded overflow-hidden relative">
                <Image
                    src={ImgBox3 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover"
                  />
                  <div>
                  <label className={hover.label3}
                  htmlFor="fileUploadImgBox3"       
                  >
                  <input
                    id="fileUploadImgBox3"
                    type="file"
                    style={{ display: 'none' }}     
                    onChange={(e) => handleFileChange(2, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
              </div>
              <div className="border border-black w-11 h-48 rounded overflow-hidden relative">
                <Image
                    src={ImgBox4 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover"
                  />
                  <div>
                  <label className={hover.label4}
                  htmlFor="fileUploadImgBox4"       
                  >
                  <input
                    id="fileUploadImgBox4"
                    type="file"
                    style={{ display: 'none' }}     
                    onChange={(e) => handleFileChange(3, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
              </div>
              <div className="border border-black w-11 h-36 rounded overflow-hidden relative">
                <Image
                    src={ImgBox5 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover"
                  />
                  <div>
                  <label className={hover.label5}
                  htmlFor="fileUploadImgBox5"       
                  >
                  <input
                    id="fileUploadImgBox5"
                    type="file"
                    style={{ display: 'none' }}  
                    onChange={(e) => handleFileChange(4, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
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
                      src={ImgBox6 || '/HomeUploads/blankimage.png'}
                      alt="file"
                      fill
                      className="object-cover"
                    />
                    <div>
                  <label className={hover.label6}
                  htmlFor="fileUploadImgBox6"       
                  >
                  <input
                    id="fileUploadImgBox6"
                    type="file"
                    style={{ display: 'none' }}    
                    onChange={(e) => handleFileChange(5, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
                </div>
                <div className="border border-black w-20 h-80 rounded overflow-hidden relative rotate-180 origin-center">
                  <Image
                        src={ImgBox7 || '/HomeUploads/blankimage.png'}
                        alt="file"
                        fill
                        className="object-cover"
                      />
                      <div>
                  <label className={hover.label7}
                  htmlFor="fileUploadImgBox7"       
                  >
                  <input
                    id="fileUploadImgBox7"
                    type="file"
                    style={{ display: 'none' }}    
                    onChange={(e) => handleFileChange(6, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
                </div>
                <div className="border border-black w-14 h-60 rounded overflow-hidden relative rotate-180 origin-center">
                  <Image
                      src={ImgBox8 || '/HomeUploads/blankimage.png'}
                      alt="file"
                      fill
                      className="object-cover"
                    />
                    <div>
                  <label className={hover.label8}
                  htmlFor="fileUploadImgBox8"       
                  >
                  <input
                    id="fileUploadImgBox8"
                    type="file"
                    style={{ display: 'none' }}       
                    onChange={(e) => handleFileChange(7, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
                </div>
                <div className="border border-black w-11 h-48 rounded overflow-hidden relative rotate-180 origin-center">
                  <Image
                    src={ImgBox9 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover"
                  />
                  <div>
                  <label className={hover.label9}
                  htmlFor="fileUploadImgBox9"       
                  >
                  <input
                    id="fileUploadImgBox9"
                    type="file"
                    style={{ display: 'none' }}    
                    onChange={(e) => handleFileChange(8, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
                </div>
                <div className="border border-black w-11 h-36 rounded overflow-hidden relative rotate-180 origin-center">
                <Image
                  src={ImgBox10 || '/HomeUploads/blankimage.png'}
                  alt="file"
                  fill
                  className="object-cover"
                />
                <div>
                  <label className={hover.label10}
                  htmlFor="fileUploadImgBox10"       
                  >
                  <input
                    id="fileUploadImgBox10"
                    type="file"
                    style={{ display: 'none' }}       
                    onChange={(e) => handleFileChange(9, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
                </div>
              </div>
            </div>
            <div className="absolute -left-44 -top-16 z-10 pointer-events-none">
                <Image
                  src="/mainProfileImg/file.png"
                  alt="file"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
            </div>
            <div style={{
              position: 'absolute',
              width: '120px',
              height: 'auto',
   
              top: '0',
              right: '0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <button style={{
                width: '120px',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '10px',
              }}
              onClick={handleUpdate}>
                Update
              </button>
              
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
                    src={ImgAbout1 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover rounded border border-black"
                  />
                  <div>
                  <label className={hover.label1}
                  htmlFor="uploadAboutImg1"       
                  >
                  <input
                    id="uploadAboutImg1"
                    type="file"
                    style={{ display: 'none' }} 
                    onChange={(e) => handleAboutFileChange(0, e.target.files?.[0] || null)}
                  />
                  </label>
                </div>
                </div>
              </div> 
              <div style={{ position: 'absolute', top: '100px', right:'220px'}}>
                <div style={{ height: '300px', width: '240px', borderRadius: '5px', backgroundColor: '#D9D9D9'}}>
                  <Image
                     src={ImgAbout2 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover rounded border border-black"
                  />
                  <div>
                  <label className={hover.label1}
                  htmlFor="uploadAboutImg2"       
                  >
                  <input
                    id="uploadAboutImg2"
                    type="file"
                    style={{ display: 'none' }} 
                    onChange={(e) => handleAboutFileChange(1, e.target.files?.[0] || null)}
                  />
                  </label>
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', top: '200px', right:'150px'}}>
                <div style={{ height: '300px', width: '240px', borderRadius: '5px', backgroundColor: '#D9D9D9'}}>
                  <Image
                    src={ImgAbout3 || '/HomeUploads/blankimage.png'}
                    alt="file"
                    fill
                    className="object-cover rounded border border-black"
                  />
                  <div>
                  <label className={hover.label1}
                  htmlFor="uploadAboutImg3"       
                  >
                  <input
                    id="uploadAboutImg3"
                    type="file"
                    style={{ display: 'none' }} 
                    onChange={(e) => handleAboutFileChange(2, e.target.files?.[0] || null)}
                  />
                  </label>
                  </div>
                </div>
              </div>
              <div style={{
              position: 'absolute',
              width: '120px',
              height: 'auto',
              bottom: '15px',
              right: '15px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <button style={{
                width: '120px',
                padding: '10px',
                border: '1px solid black',
                borderRadius: '10px',
              }}
              onClick={handleAboutUpdate}>
                Update
              </button>
              
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
          </div>

          <div style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            bottom: '15px',
            right: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <button style={{
              fontSize: '2rem',
              height: '60px',
              width: '60px',
              border: '1px solid black',
              borderRadius: '100px'
            }}
            onClick={togleModalCreateServices}>+</button>
          </div>

          <div style={{
            position: 'absolute',
            width: '350px',
            height: '420px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: isModalCreateServicesOpen?'flex':'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            backgroundColor: 'white',
            zIndex: '100',
            gap: '10px',
            borderRadius:'10px'
          }}>
            <div style={{
              height: '100px',
              width: '100px',
              position: 'relative',
              border: '1px solid black',
              borderRadius:'10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '0.8rem'
              }}>
              <label className={hover.label1}
                  htmlFor="uploadAboutImg1"       
                  >
                  <input
                    id="uploadAboutImg1"
                    type="file"
                    style={{ display: 'none' }} 
                    onChange={(e) => handleAboutFileChange(0, e.target.files?.[0] || null)}
                  />
              </label>
                Upload Icon
            </div>
            <input placeholder="Your Skills" type="text" style={{
              padding: '10px',
              width: '190px',
              border: '1px solid black',
              textAlign: 'center',
              borderRadius:'10px'
            }}/>
            <input placeholder="Short Intro" type="text" style={{
              padding: '10px',
              width: '190px',
              border: '1px solid black',
              textAlign: 'center',
              borderRadius:'10px'
            }}/>
            <div style={{
              padding: '10px',
              width: '190px',
              position: 'relative',
              border: '1px solid black',
              borderRadius:'10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '0.8rem'
              }}>
                <label className={hover.label1}
                  htmlFor="uploadAboutImg1"       
                  >
                  <input
                    id="uploadAboutImg1"
                    type="file"
                    style={{ display: 'none' }} 
                    onChange={(e) => handleAboutFileChange(0, e.target.files?.[0] || null)}
                  />
              </label>
                Upload skill Icon
            </div>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              border: '1px solid black',
              width: '90%',
              height: '70px'
            }}>
              <Image
                src={ImgAbout1 || '/HomeUploads/blankimage.png'}
                alt="file"
                width={40}
                height={40}
                
                className="object-cover rounded border border-black"
              />
              <Image
                src={ImgAbout1 || '/HomeUploads/blankimage.png'}
                alt="file"
                width={40}
                height={40}
                
                className="object-cover rounded border border-black"
              />
              <Image
                src={ImgAbout1 || '/HomeUploads/blankimage.png'}
                alt="file"
                width={40}
                height={40}
                
                className="object-cover rounded border border-black"
              />
              <Image
                src={ImgAbout1 || '/HomeUploads/blankimage.png'}
                alt="file"
                width={40}
                height={40}
                
                className="object-cover rounded border border-black"
              />
              <Image
                src={ImgAbout1 || '/HomeUploads/blankimage.png'}
                alt="file"
                width={40}
                height={40}
                
                className="object-cover rounded border border-black"
              />
              

            </div>
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'
          }}>

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


