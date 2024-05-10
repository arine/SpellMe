'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Flex, Input, Text } from '@chakra-ui/react'

import { Card } from './card';

export default function Home() {
  const [inputTxt, setInputTxt] = useState('');
  const [dictionary, setDictionary] = useState({
    'A': 'Alpha',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel',
    'I': 'India',
    'J': 'Juliett',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'X-ray',
    'Y': 'Yankee',
    'Z': 'Zulu',
  });
  return (
    <>
      <Text fontSize="3rem" fontWeight="400" textAlign="center">SpellMe</Text>
      <Flex align="center" justify="center">
        <Input
          maxW="800px"
          m="1rem"
          type="text"
          value={inputTxt}
          onChange={handleInputChange}
        />
      </Flex>
      <div className="card-wrapper">
        {inputTxt.split('').map((chr, idx) => (
          <Card key={idx}
            chr={chr}
            dictionary={dictionary}
          />
        ))}
      </div>
    </>
  );

  function handleInputChange(e: any) {
    setInputTxt(e.target.value);
  }
}

