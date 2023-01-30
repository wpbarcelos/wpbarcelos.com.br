import { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function ContactForm() {
    const MySwal = withReactContent(Swal)
   
    const initialData= {
        name: "",
        email: "",
        phone: "",
        message: "",
    }

    const { data, setData, post, reset, processing, errors } = useForm({...initialData});

    const handleChangeForm = (event) => {
        setData( event.target.name, event.target.value) 
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        post("/sendmail",{ preserveScroll:true,
        onSuccess:(response)=>{
            console.log(response)
            MySwal.fire('<p>Email enviado com sucesso aguarde o retorno</p>','','success')
            setData({...initialData})
        }}) 
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <InputLabel>Nome</InputLabel>
                <TextInput
                    className="w-full"
                    name="name"
                    value={data.name}
                    required={false}
                    handleChange={handleChangeForm}
                />
                { errors.name && <p className="px-4 py-2 bg-red-800 bg-opacity-50 rounded ">{ errors.name}</p>}
            </div>

            <div className="mt-4">
                <InputLabel>Email</InputLabel>
                <TextInput
                    className="w-full"
                    type="email"
                    name="email"
                    value={data.email}
                    required={true}
                    handleChange={handleChangeForm}
                />
                { errors.email && <p className="px-4 py-2 bg-red-800 bg-opacity-50 rounded ">{ errors.email}</p>}
            </div>

            <div className="mt-4">
                <InputLabel>Telefone/WhatsApp</InputLabel>
                <TextInput
                    className="w-full"
                    name="phone"
                    required={true}
                    
                    value={data.phone}
                    handleChange={handleChangeForm}
                />
                { errors.phone && <p className="px-4 py-2 bg-red-800 bg-opacity-50 rounded ">{ errors.phone}</p>}
            </div>

            <div className="mt-4">
                <InputLabel>Mensagem</InputLabel>
                <textarea
                    name="message"
                    onChange={handleChangeForm}
                    rows="10"
                    required={true}
                    
                    value={data.message}
                    className="w-full border-gray-300 rounded-md shadow-sm resize-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                ></textarea>
                { errors.message && <p className="px-4 py-2 bg-red-800 bg-opacity-50 rounded ">{ errors.message}</p>}
            </div>
            <SecondaryButton className="mt-4" type={"submit"} disabled={processing}>
                {processing  ? 'Enviando...' : 'Enviar formulário'}
            </SecondaryButton>
        </form>
    );
}
