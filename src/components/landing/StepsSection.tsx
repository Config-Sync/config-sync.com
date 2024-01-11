import Image from "next/image";

export default function StepsSection() {
    return (
        <section id="steps" className="py-8">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-xl">
                        How It Works
                    </h2>
                </div>
                <div className="flex flex-col mt-8">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3 lg:w-1/2 py-5 px-2.5">
                            <span className="text-sm text-primary font-medium">
                                Step 1
                            </span>
                            <h3 className="text-xl font-medium">
                                Sign Up
                            </h3>
                            <p className="text-md font-light">
                                Begin by registering on the platform, providing your email address and creating a secure
                                password. Alternatively, you can sign up using your Google, Discord, or GitHub account.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/2 py-5 px-2.5">
                            <Image
                                src="/landing/steps/sign-up.svg"
                                alt="product preview"
                                layout="fill"
                                className="w-full max-h-[250px] shrink !object-contain !relative"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap-reverse">
                        <div className="w-full md:w-1/3 lg:w-1/2 py-5 px-2.5">
                            <Image
                                src="/landing/steps/create-project.svg"
                                alt="product preview"
                                layout="fill"
                                className="w-full max-h-[250px] shrink !object-contain !relative"
                            />
                        </div>
                        <div className="w-full md:w-2/3 lg:w-1/2 py-5 px-2.5">
                            <span className="text-sm text-primary font-medium">
                                Step 2
                            </span>
                            <h3 className="text-xl font-medium">
                                Create A Project
                            </h3>
                            <p className="text-md font-light">
                                Once logged in, create a new project, carefully selecting the subscription plan that
                                aligns with your requirements. Proceed to enhance collaboration by implementing team
                                members into the project, ensuring seamless coordination.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3 lg:w-1/2 py-5 px-2.5">
                            <span className="text-sm text-primary font-medium">
                                Step 3
                            </span>
                            <h3 className="text-xl font-medium">
                                Upload your Configurations
                            </h3>
                            <p className="text-md font-light">
                                Upload your configuration files to the platform, on the desired instance node. You can
                                also create a new configuration file directly on the platform, using the integrated
                                editor.
                            </p>
                        </div>
                        <div className="w-full md:w-1/3 lg:w-1/2 py-5 px-2.5">
                            <Image
                                src="/landing/steps/upload.svg"
                                alt="product preview"
                                layout="fill"
                                className="w-full max-h-[250px] shrink !object-contain !relative"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap-reverse">
                        <div className="w-full md:w-1/3 lg:w-1/2 py-5 px-2.5">
                            <Image
                                src="/landing/steps/sync.svg"
                                alt="product preview"
                                layout="fill"
                                className="w-full max-h-[250px] shrink !object-contain !relative"
                            />
                        </div>
                        <div className="w-full md:w-2/3 lg:w-1/2 py-5 px-2.5">
                            <span className="text-sm text-primary font-medium">
                                Step 4
                            </span>
                            <h3 className="text-xl font-medium">
                                Start Synchronizing your Configurations
                            </h3>
                            <p className="text-md font-light">
                                Lastly, download the Config Sync plugin and install it on your server. Once installed,
                                the plugin will automatically synchronize your configuration files with the platform,
                                ensuring that all your server instances are up-to-date with the latest configurations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}