import React from 'react'
import ListLayout from '@/layouts/ListLayout'

export const LIST = {
  page: 1,
  per_page: 10,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 1,
      name: 'Phi Phi Islands',
      detail:
        'Phi Phi Islands are a group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.',
      coverimage: 'https://www.melivecode.com/attractions/1.jpg',
      latitude: 7.737619,
      longitude: 98.7068755,
    },
    {
      id: 2,
      name: 'Eiffel Tower',
      detail:
        'Eiffel Tower is one of the most famous structures in the world. Eiffel Tower is named after a leading French architect and engineer. It was built as a symbol of the World Fair in 1889.',
      coverimage: 'https://www.melivecode.com/attractions/2.jpg',
      latitude: 48.8583736,
      longitude: 2.2922926,
    },
    {
      id: 3,
      name: 'Times Square',
      detail:
        'Times Square has become a global landmark and has become a symbol of New York City. This is a result of Times Square being a modern, futuristic venue, with huge advertising screens dotting its surroundings.',
      coverimage: 'https://www.melivecode.com/attractions/3.jpg',
      latitude: 40.7589652,
      longitude: -73.9893574,
    },
    {
      id: 4,
      name: 'Mount Fuji',
      detail:
        'Mount Fuji is the highest mountain in Japan, about 3,776 meters (12,388 feet) situated to the west of Tokyo. Mount Fuji can be seen from Tokyo on clear days.',
      coverimage: 'https://www.melivecode.com/attractions/4.jpg',
      latitude: 35.3606422,
      longitude: 138.7186086,
    },
    {
      id: 5,
      name: 'Big Ben',
      detail:
        'Westminster Palace Clock Tower which is most often referred to as Big Ben. This is actually the nickname for the largest bell that hangs in the vent above the clock face.',
      coverimage: 'https://www.melivecode.com/attractions/5.jpg',
      latitude: 51.5007325,
      longitude: -0.1268141,
    },
    {
      id: 6,
      name: 'Taj Mahal',
      detail:
        'The Taj Mahal or Tachomhal is a burial building made of ivory white marble. The Taj Mahal began to be built in 1632 and was completed in 1643.',
      coverimage: 'https://www.melivecode.com/attractions/6.jpg',
      latitude: 27.1751496,
      longitude: 78.0399535,
    },
    {
      id: 7,
      name: 'Stonehenge',
      detail:
        'Stonehenge is a monument prehistoric In the middle of a vast plain in the southern part of the British. The monument itself consists of 112 gigantic stone blocks arranged in 3 overlapping circles.',
      coverimage: 'https://www.melivecode.com/attractions/7.jpg',
      latitude: 51.1788853,
      longitude: -1.8284037,
    },
    {
      id: 8,
      name: 'Statue of Liberty',
      detail:
        'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States. The copper statue, a gift from the people of France to the people of the United States.',
      coverimage: 'https://www.melivecode.com/attractions/8.jpg',
      latitude: 40.689167,
      longitude: -74.044444,
    },
    {
      id: 9,
      name: 'Sydney Opera House',
      detail:
        'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the most famous and distinctive buildings and a masterpiece of 20th century architecture.',
      coverimage: 'https://www.melivecode.com/attractions/9.jpg',
      latitude: -33.858611,
      longitude: 151.214167,
    },
    {
      id: 10,
      name: 'Great Pyramid of Giza',
      detail:
        'The Great Pyramid of Giza is the oldest and largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt. It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact.',
      coverimage: 'https://www.melivecode.com/attractions/10.jpg',
      latitude: 29.979167,
      longitude: 31.134167,
    },
  ],
}
export default function AttractionListPage() {
  return <ListLayout title={'Attractions'} list={LIST} />
}
