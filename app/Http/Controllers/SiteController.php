<?php

namespace App\Http\Controllers;

use App\Mail\MailCarrier;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function index()
    {
        return Inertia::render('Site/Index');
    }

    public function sendmail(Request $request)
    {

        $data = $request->validate([
            'name' => 'required|min:2',
            'email' => 'required|email',
            'phone' => 'required|numeric|digits:11',
            'message' => 'required|min:10',
        ], [
                'name.required' => 'O nome é obrigatório',
                'name.min' => 'O nome deve ter o tamanho :min de letras',
                'phone.required' => 'O celular ou whastApp',
                'phone.numeric' => 'Apenas numeros por favor',
                'phone.digits' => 'Somente DDD e celular, exemplo: 27999447975',
                'message.required' => 'Descreva algo na mensagem',
                'message.min' => 'A mensagem está muito pequena.'
            ]);

        Mail::to('wpbarcelos@gmail.com')->send(new MailCarrier([...$data]));

        return;
    }
}