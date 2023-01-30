<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Queue\SerializesModels;

class MailCarrier extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $phone;
    public $email;
    public $msg;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {

        $this->name = $data['name'];
        $this->phone = $data['phone'];
        $this->email = $data['email'];
        $this->msg = $data['message'];
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Alguem entrou em contato em ' . date('d/m/Y \à\s H:i'),
            from: new Address('wp.barcelos@gmail.com', 'Wanderson Passos Barcelos'),
            replyTo:  $this->email ,
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        return new Content(
            markdown: 'emails.contact',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }
}