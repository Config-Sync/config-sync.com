import Image from "next/image";
import {useTranslations} from "next-intl";

interface Step {

    translationKey: string;
    icon: string;

}

const steps = [
    {
        translationKey: 'one',
        icon: '/landing/steps/sign-up.svg',
    },
    {
        translationKey: 'two',
        icon: '/landing/steps/create-project.svg',
    },
    {
        translationKey: 'three',
        icon: '/landing/steps/upload.svg',
    },
    {
        translationKey: 'four',
        icon: '/landing/steps/sync.svg',
    }
]

export default function StepsSection() {
    const t = useTranslations('Landing.How-It-Works');

    return (
        <section id="steps" className="py-8">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-2xl">
                        {t('title')}
                    </h2>
                </div>
                <div className="flex flex-col mt-8 odd:child:flex-row-reverse">
                    {
                        steps.map((step, index) => (
                            <StepElement
                                key={index}
                                step={step}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

function StepElement({step}: {step: Step}) {
    const t = useTranslations(`Landing.How-It-Works.Steps.${step.translationKey}`);

    return (
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 lg:w-1/2 py-5 px-2.5">
                <Image
                    src={step.icon}
                    alt="Step SVG"
                    width={250}
                    height={250}
                    className='w-full max-h-[250px] shrink'
                />
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 py-5 px-2.5 flex justify-center">
                <div>
                    <span className="text-sm text-primary font-medium">
                        {t('step')}
                    </span>
                    <h3 className="text-xl font-medium">
                        {t('title')}
                    </h3>
                    <p className="text-md font-light max-w-[450px]">
                        {t('description')}
                    </p>
                </div>
            </div>
        </div>
    );
}