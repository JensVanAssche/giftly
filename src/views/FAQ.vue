<template>
  <div class="faq container">
    <h1 class="page-title">Veelgestelde vragen</h1>
    <ul>
      <li class='List-Group pb-4' v-for="(item, i) in faq" :key="i">
        <span class="d-block lead"> 
          {{ item.question }}
        </span>
        {{ item.answer }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
      {
        question: 'Hoe werkt Giftly?',
        answer: 'Giftly is een nieuwe service die de manier van pakjes kopen gaat veranderen! Je kent wel de momenten, vlak voor kerstmis of een verjaardag, je wil voor iemand een cadeau kopen maar hebt geen idee hebt hoe of wat, waar of wanneer. Die tijden van kopbreken zijn voorbij dankzij Giftly! Bij ons kan je geweldige cadeaus kopen waarvan je ontvanger noch jezelf weet wat erin zit, een dubbele verrassing dus! Cadeaus kunnen gekocht worden op basis van interesses, lokale of exotische afkomst of gewoon totaal willekeurig! Aan het eind van uw aankoop krijgt u de kans om uw prijs aan te passen. Hoe meer u betaalt, hoe meer u in het cadeautje steekt! De inhoud van het cadeau hangt af van uw keuzes bij het bestel-proces.'
      },
      {
        question: 'Weet ik wat er in het cadeau zit eens ik het koop?',
        answer: 'Neen! U zult weten wat voor soort cadeau het is, behalve als het willekeurig is. Zo is het een verassing voor iedereen!'
      },
      
      {
        question: 'Ik heb een aankoop gedaan, wat nu?',
        answer: 'U zal een e-mail krijgen met daarin in een tracking-ID van uw lokale pakjes-dienst. Zo kan u uw pakje opvolgen.'
      },
      
      {
        question: 'Kan ik mijn pakje personalizeren?',
        answer: 'Voor dat u betaalt kan u uw pakje aanpassen naar uw persoonlijke voorkeuren. Zo kan u inpakpapier kiezen en zelf een persoonlijk kaartje toevoegen aan het pakje.'
      },
      {
        question: 'Ik vind mijn pakje niet leuk, wat doe ik dan?',
        answer: 'Wij zijn verplicht om uw pakjes terug te nemen, volgens Europese wet. U zal dan krediet krijgen voor onze winkel.'
      }
    ]
    }
  }
}
</script>

<style lang="scss" scoped>
.List-Group{margin-bottom: 15px;}
</style>