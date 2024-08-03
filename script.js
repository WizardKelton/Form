const citiesByState = {
    "Maharashtra": [
        "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad",
        "Solapur", "Amravati", "Kolhapur", "Sangli", "Satara"
    ],
    "Karnataka": [
        "Bangalore", "Mysore", "Hubli", "Belgaum", "Mangalore",
        "Gulbarga", "Davanagere", "Shimoga", "Bellary", "Tumkur"
    ],
    "Gujarat": [
        "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar",
        "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Bharuch"
    ]
};

// Function to update city options based on the selected state
$(document).ready(function() {
    $("#state").change(function() {
        const selectedState = $(this).val();
        const citySelect = $("#city");
        citySelect.empty();
        if (selectedState in citiesByState) {
            const cities = citiesByState[selectedState];
            $.each(cities, function(index, city) {
                citySelect.append($("<option>").text(city));
            });
        } else {
            citySelect.append($("<option>").text("Select State first"));
        }
    });
});

$(document).ready(function(){
    $("#phone").on("input", function(){
        const mob = $(this).val();
        const phonePattern = /^[0-9]{10}$/;
        if(mob == ""){
            $(this).removeClass("error")
        }else{
            if(!phonePattern.test(mob)){
                $(this).addClass("error");
            }else{
                $(this).removeClass("error");
            }
        }
        
    });
});

$(document).ready(function(){
    $('#confirm').on("input", function(){
        const confirmed = $(this).val();
        if(confirmed != "CONFIRM"){
            $(this).addClass("error");
        }else{
            $(this).removeClass("error");
        }
    });
});

$(document).ready(function(){
    $('#myform').submit(function(event){
        const tick = $('#Check').is(':checked');
        if(!tick){
            alert("Please tick the captcha");
            event.preventDefault();
            $('#alertModal').modal('show');
        }else{
            alert("Form Submitted Succesfuly");
        }
    });
});

// Function for form validation
/*
$("#myForm").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const phone = $("#phone").val();
    const email = $("#email").val();
    const state = $("#state").val();
    const city = $("#city").val();
    const country = $("#country").val();
    const pincode = $("#pincode").val();


    if (name === "" || phone === "" || email === "" || state === "" || city === "" || country === "" || pincode === "") {
        alert("Please fill in all fields.");
    } else {

        alert("Form submitted successfully!");
    }
});
*/