import { Button, Flex, Text } from '@chakra-ui/react';
import Title from '../ChildComponent/Title';
import { useCallback, useState } from 'react';
import Count from './Count';
import Buttonss from './Buttonss';

export default function () {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(2500);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <Flex
      w={'100%'}
      flexDir={'column'}
      borderWidth={1}
      justify={'center'}
      align={'center'}
    >
      <Title />
      <Flex p={5} flexDir={'column'} borderWidth={1}>
        <Count text="Age" count={age} />
        <Buttonss colorScheme="green" handleClick={handleAge}>
          Age Button
        </Buttonss>
      </Flex>
      <Flex p={5} flexDir={'column'} borderWidth={1}>
        <Count text="Salary" count={salary} />
        <Buttonss colorScheme="green" handleClick={handleSalary}>
          Salary Button
        </Buttonss>
      </Flex>
    </Flex>
  );
}
