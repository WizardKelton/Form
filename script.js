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

    $("#phone").on("input", function(){
        const mob = $(this).val();
        const phonePattern = /^[0-9]{10}$/;
        if(mob == ""){
            $(this).removeClass("error");
        } else {
            if(!phonePattern.test(mob)){
                $(this).addClass("error");
            } else {
                $(this).removeClass("error");
            }
        }
    });

    $("#email").on("input", function(){
        const mail = $(this).val();
        const mailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(mail == ""){
            $(this).removeClass("error");
        }else{
            if(!mailpattern.test(mail)){
                $(this).addClass("error");
            }else{
                $(this).removeClass("error");
            }
        }
    });

    $('#confirm').on("input", function(){
        const confirmed = $(this).val();
        if(confirmed != "CONFIRM"){
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });

    $('#myform').submit(function(event){
        const tick = $('#Check').is(':checked');
        if(!tick){
            event.preventDefault();
            $('#alertModal').modal('show');
        } else {
            alert("Form Submitted Successfully");
        }
    });
});

