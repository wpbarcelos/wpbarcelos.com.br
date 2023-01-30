import ContactForm from "@/Components/ContactForm";
import { Head } from "@inertiajs/react";

import NotebookBackground from "../../../images/background_notebook.png";

import envelope from "../../../images/envelope.svg";

function Tech({ title }) {
    return <span className="px-3 py-2 border rounded ">{title}</span>;
}

function Subtitle({ title }) {
    return <h2 className="mb-2 text-2xl">{title}</h2>;
}

export default function SiteIndex() {
    const techs = ["Javascript", "Vue", "PHP", "NodeJS", "Typescript"];

    const mobiles = ["React Native"];

    const links = [
        {
            label: "Linkedin",
            url: "https://www.linkedin.com/in/wanderson-passos-barcelos-ab196872/",
        },
        { label: "Facebook", url: "https://www.facebook.com/wpbarcelos" },
        { label: "Github", url: "https://github.com/wpbarcelos" },
        { label: "Email", url: "mailto:wp.barcelos@gmail.com" },
    ];

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gray-800">
                <div
                    className="h-[600px] bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${NotebookBackground})` }}
                >
                    <div className="max-w-6xl pt-8 mx-auto sm:px-6 lg:px-8">
                        <h1 className="text-6xl mt-14 font-jura">WPBARCELOS</h1>

                        <p className="max-w-2xl mt-4 text-xl leading-loose">
                            Olá, meu nome é{" "}
                            <strong className="font-weight">
                                Wanderson Passos Barcelos
                            </strong>
                            , sou programador há mais de 8 anos. Trabalho com
                            frontend, backend e mobile.
                        </p>

                        <div className="mt-10">
                            <Subtitle title={"Desenvolvedor Web"} />

                            <div className="flex space-x-4">
                                {techs.map((tech, index) => (
                                    <Tech key={tech} title={tech} />
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <Subtitle title={"Desenvolvedor mobile"} />

                            <div className="flex space-x-4">
                                {mobiles.map((tech, index) => (
                                    <Tech key={tech} title={tech} />
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <Subtitle title={"Desenvolvedor Scriptcase"} />

                            <p>7 anos de experiencia em Scriptcase</p>
                        </div>

                        <div className="mt-10">
                            <Subtitle title="Curriculo" />

                            <a
                                target="_blank"
                                className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md dark:bg-gray-200 dark:text-gray-800 hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                href="https://docs.google.com/document/d/e/2PACX-1vRduftuh_c-rs8vVYkMeNiP8KWRbjw43act3WVkiHszsX4Gx4uxR-HI7k7C_dYzDQ/pub"
                            >
                                Download
                            </a>
                        </div>

                        <div className="mt-10 mb-10">
                            <Subtitle title={"Meus Links"} />

                            {links.map((link) => (
                                <a
                                    target="_blank"
                                    key={link.label}
                                    className="px-4 py-2 mr-2 transition-all duration-300 border rounded hover:bg-white hover:text-gray-800"
                                    href={link.url}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        <div className="flex justify-between w-full mb-8">
                            <div className="flex-1 ">
                                <Subtitle title="Entre em contato" />

                                <ContactForm />
                            </div>
                            <img
                                src={envelope}
                                className="sm:hidden md:block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
