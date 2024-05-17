import React from 'react';
import CustomGoogleLogin from '../components/CustomGoogleLogin';
import Button from '../components/reusable/Button';
import SplashScreenBackground from '../components/SplashScreenBackground';
import DemoAppIcon from '../icons/DemoAppIcon';
import PenIcon from '../icons/PenIcon';

interface SplashScreenProps {
    onLoginCallback?: () => void
};

const SplashScreen: React.FC<SplashScreenProps> = ({ onLoginCallback }) => {
    return (
        <div>
            <div className="absolute bottom-0 left-0 right-0  -z-10">
                <SplashScreenBackground />
            </div>
            <div className="max-h-screen">

                <div className="flex place-content-between text-offBlack pl-10 pr-16 mt-5 items-center">
                    <div className="flex">
                        <div className="relative -bottom-1 -right-3">
                            <PenIcon height={48} width={48} />
                        </div>
                        <div className="text-center text-5xl font-bold">Jot</div>
                    </div>
                    <CustomGoogleLogin onLoginCallback={onLoginCallback}>
                        <Button color={'transparent'} onClick={() => { }} >
                            <div className="text-offBlack text-large font-semibold px-2 py-1">
                                Login
                            </div>
                        </Button>
                    </CustomGoogleLogin>
                </div>
                <div className='flex flex-col items-center gap-7 mt-24'>
                    <p className="text-offBlack text-4xl font-semibold">
                        Notes without the noise <br /> Lightweight note-taking
                    </p>
                    <CustomGoogleLogin onLoginCallback={onLoginCallback}>
                        <Button color={'purple'} onClick={() => { }} >
                            <div className="px-2 py-1">
                                Try for free
                            </div>
                        </Button>
                    </CustomGoogleLogin>

                    <div className=" overflow-hidden rounded-lg shadow-lg border-t border-faintGray">
                        <DemoAppIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;