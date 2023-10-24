let parent1 = '';
let parent2 = '';
let grandchild1 = '';
let grandchild2 = '';
let FamilyphotoSrc = '';

const Linda = 'Linda Hellstrand';
const Elise = 'Elise Hellstrand Winter';
const Edward = 'Edward Hellstrand Winter';

const Konrad = 'Konrad Storebø';
const Anna = 'Anna Winter Storebø';
const Vilja = 'Vilja Winter Storebø'

const Lindus = 'Linda Sundby';
const Agnes = 'Agnes Sundby Winter';

const Nic = 'Nicolas Lilja Marthinsen';
const Fiona = 'Fiona Lija Winter';
const Olivia = 'Olivia Lilja Winter';

const Kjersti = 'Kjersti Ruud-Salomonsen';

const Lachy = 'Lachlan Cosgrove';

const familyphotoElement = document.getElementById("Familyphoto");
const secfamilyphotoElement = document.getElementById("Familyphoto2");
const thirdfamilyphotoElement = document.getElementById("Familyphoto3");

// fill familyphotos, make visible and fade in // 
const fillPhotosFade = function(srcPhoto1, srcPhoto2, srcPhoto3) {
    familyphotoElement.src = srcPhoto1;
    secfamilyphotoElement.src = srcPhoto2;
    thirdfamilyphotoElement.src = srcPhoto3;
    familyphotoElement.style.visibility = 'visible';
    secfamilyphotoElement.style.visibility ='visible';
    thirdfamilyphotoElement.style.visibility ='visible';
    document.getElementById('footer').scrollIntoView({
        behavior: 'smooth',
        block: 'start'});

    // Remove 'fadeIn' class and add it again after a short delay to restart the animation
    familyphotoElement.classList.remove('fadeIn');
    setTimeout(() => {
        familyphotoElement.classList.add('fadeIn');
    }, 6);

    secfamilyphotoElement.classList.remove('fadeInSec');
    setTimeout(() => {
        secfamilyphotoElement.classList.add('fadeInSec');
    }, 6);

    thirdfamilyphotoElement.classList.remove('fadeInThird');
    setTimeout(() => {
        thirdfamilyphotoElement.classList.add('fadeInThird');
    }, 6);

} 




// fill family-divs // 
const fillFamily = function(grandchild1, grandchild2, parent2) {
    document.getElementById('parent2').textContent = parent2;
    document.getElementById('grandchild1').textContent = grandchild1;
    document.getElementById('grandchild2').textContent = grandchild2;
}

// Register clicks and fill family-divs accordingly
let child = document.querySelectorAll('.child');

child.forEach(function (i) {
    i.addEventListener('click', function() {
        parent1 = i.textContent;
        document.getElementById('parent1').textContent = parent1;      
        if (parent1 == document.getElementById('child1').textContent) {
            fillFamily(Elise, Edward, Linda);
            fillPhotosFade(
                'pics/pics-Stephan/LindaogEd.JPG', 
                'pics/pics-Stephan/Stephan.jpg',
                'pics/pics-Stephan/8.Skytil-IMG_7153.jpeg',
            );
          
        } else if (parent1 == document.getElementById('child2').textContent) {
            fillFamily(Anna, Vilja, Konrad);
           fillPhotosFade(
                'pics/pics-Celine/maskorama.jpeg',
                'pics/pics-Celine/7 Stranden på Kattegatt strandcamping leverer.jpg',
                'pics/pics-Celine/Vilja glasses.jpg'
            );

        } else if (parent1 == document.getElementById('child3').textContent) {
            fillFamily(Agnes,'', Lindus);
            fillPhotosFade(
                'pics/pics-Simon/Wintersamling.jpeg',
                'pics/pics-Simon/huske.jpeg', 
                'pics/pics-Simon/vaskehar.jpeg'
            );
        } else if (parent1 == document.getElementById('child4').textContent) {
            fillFamily(Fiona, Olivia, Nic);
            fillPhotosFade(
                'pics/pics-Johanna/fjasefjes.jpeg',
                'pics/pics-Johanna/Johanna og Nic.jpg',
                'pics/pics-Johanna/Halloween.jpg'
            );
        } else if (parent1 == document.getElementById('child5').textContent) {
            fillFamily('','',Kjersti);
            fillPhotosFade(
                'pics/pics-Florian/kalandra.jpg', 
                'pics/pics-Florian/Florilol.jpeg', 
                'pics/pics-Florian/Nordmarka.jpg', 
            );
        } else if (parent1 == document.getElementById('child6').textContent) {
            fillFamily('','',Lachy);
            fillPhotosFade(
                'pics/pics-Mie/4.Phooty2.jpg', 
                'pics/pics-Mie/surf.jpg',
                'pics/pics-Mie/beach.jpeg', 
            );
        }

        // Center if Only child//
        if (document.getElementById('grandchild2').textContent == '') {
            document.getElementById("grandchild1").style.gridColumn = '3 / 5';
        } else { 
            document.getElementById("grandchild1").style.gridColumn = '3 / 4';
        }
    });
});







