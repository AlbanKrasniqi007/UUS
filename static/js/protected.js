$(document).ready(function(){
    $('.status').change(function(){
        var status = $(this).val();
        var id = $(this).data('id');
        $.ajax({
            url: '/update_status', 
            type: 'POST',
            data: {
                'status': status,
                'id': id
            },
            success: function(result){
                
            },
            error: function(error){
                console.log(error)
            }
        });
    });
});

setTimeout(function() {
    $('#alert').fadeOut('slow');
}, 10000);
$('.close').click(function(){
    $(this).parent().hide();
});


const toggleVisibility = (element) => {
    element.classList.toggle('visible');
    element.classList.toggle('hidden');
}

const hideElement = (element) => {
    element.classList.add('hidden');
    element.classList.remove('visible');
}

const divs = ['div1', 'div2', 'div3', 'div4', 'div5','div6','div7'].map(id => document.getElementById(id));
const toggles = [
    { button: 'toggleDivs', divs: [0, 1] },
    { button: 'toggleDiv2', divs: [2] },
    { button: 'toggleDiv3', divs: [3] },
    { button: 'toggleDiv4', divs: [4] },
    { button: 'toggleDiv5', divs: [5] },
    { button: 'toggleDiv6', divs: [6] }
].map(toggle => ({ ...toggle, button: document.getElementById(toggle.button) }));

toggles.forEach(({ button, divs: divIndices }) => {
    button.addEventListener('click', () => {
        divIndices.forEach(index => toggleVisibility(divs[index]));

        divs.filter((_, i) => !divIndices.includes(i)).forEach(div => {
            if (!div.classList.contains('hidden')) {
                hideElement(div);
            }
        });
    });
});




var loadFile = function(event) {
    var output = document.getElementById('output');
    output.innerHTML = "";
    for(let i=0; i< event.target.files.length; i++){
        var reader = new FileReader();
        reader.onload = function(){
            var img = document.createElement('img');
            img.src = reader.result;
            output.appendChild(img);
        };
        reader.readAsDataURL(event.target.files[i]);
    }
};

var loadFile2 = function(event) {
    var output = document.getElementById('output2');
    output.innerHTML = "";
    for(let i=0; i< event.target.files.length; i++){
        var reader = new FileReader();
        reader.onload = function(){
            var img = document.createElement('img');
            img.src = reader.result;
            output.appendChild(img);
        };
        reader.readAsDataURL(event.target.files[i]);
    }
};


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const recommendations = document.getElementById("recommendations");

    async function performSearch() {
        const query = searchInput.value.trim();
        if (query === "") {
            recommendations.innerHTML = "";
            return;
        }
        try {
            const response = await fetch("/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ query }),
            });
            if (response.ok) {
                const users = await response.json();
                displayRecommendations(users);
            } else {
                console.error("Error fetching data");
            }
        } catch (err) {
            console.error(err);
        }
    }

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        performSearch();
    });

    searchInput.addEventListener("input", performSearch);

    function displayRecommendations(users) {
        recommendations.innerHTML = users.length === 0 ? "No results found." : "";
        users.forEach((user) => {
            const li = document.createElement("li");
            li.className = "rcmn-li";
            li.textContent = user.name;
            li.setAttribute("data-id", user.id);
            recommendations.appendChild(li);
        });
    }

    function navigateToUser(userId) {
        window.location.href = `/user/${userId}`;
    }

    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && recommendations.firstElementChild) {
            const userId = recommendations.firstElementChild.getAttribute("data-id");
            window.location.href = `/user/${userId}`;
        }
    });
    searchForm.addEventListener("submit", function (e) {
        e.preventDefault();
        if (recommendations.firstElementChild) {
            const userId = recommendations.firstElementChild.getAttribute("data-id");
            window.location.href = `/user/${userId}`;
        }
    });
    recommendations.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            const userId = e.target.getAttribute("data-id");
            window.location.href = `/user/${userId}`;
        }
    });
});



