<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>MI6</title>
</head>
<body>

    <div id="people-of-interest-app"></div>

    @vite('resources/js/people_of_interest.jsx') 
    
</body>
</html>