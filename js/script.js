console.log('hello1')


document.getElementById('buttonOne').addEventListener('click', function() {
    var myVal = document.getElementById('inputOne').value;
    console.log(myVal);

    document.getElementById('inputTwo').value = myVal;

    });
