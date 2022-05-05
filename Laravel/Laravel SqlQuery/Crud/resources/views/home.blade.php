@extends('layouts.app')

@section('content')
<main class="sm:container sm:mx-auto sm:mt-10">
    <div class="w-full sm:px-6">

        @if (session('status'))
            <div class="text-sm border border-t-8 rounded text-green-700 border-green-600 bg-green-100 px-3 py-4 mb-4" role="alert">
                {{ session('status') }}
            </div>
        @endif

        <section class="flex flex-col break-words bg-white sm:border-1 sm:rounded-md sm:shadow-sm sm:shadow-lg ">

            <header class="font-semibold bg-gray-200 text-gray-700 py-5 px-6 sm:py-6 sm:px-8 sm:rounded-t-md">
                Dashboard
            </header>

            <div class="flex inline-flex  justify-between w-full p-6 ">


              
                <div class="text-gray-700 ">
                    You are logged in!

                </div>


                <a
                    href="/cars"
                    class=" border-b-2 pb-2 border-dotted italic text-red-500">
                    Go to Car? &rarr;
                </a>

            </div>
        </section>
    </div>
</main>
@endsection
