<x-mail::message>

## Você recebeu uma nova mensagem

**Nome**  {{ $name }} 

**Email** {{ $email }}

**Telefone/WhatsApp** {{ $phone }}
  
**Mensagem** {{ $msg }}


<br>
Obrigado,<br>
{{ config('app.name') }}

</x-mail::message>
