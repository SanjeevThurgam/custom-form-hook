import * as React from "react";
import {
  Flex,
  FormControl,
  Switch,
//   Input,
  InputGroup,
  InputLeftAddon,
  FormLabel,
  Select,
  Button,
  Stack
} from "@chakra-ui/react";
// import useForm from '../Hooks/useForm'

let counter = 0;

export const ContentContainer = () => {
    

    // const { register, handleSubmit } = useForm();
    // register("hi");
    
    const onSubmit = (e: object) => {
        console.log(e)
    }


    return (
        <Flex direction='column' w='50%' h='50%' alignItems='flex-start' textAlign='left' justify='space-between'>
            <FormControl alignContent='space-between' /*onSubmit={handleSubmit(onSubmit)} */>
                <InputGroup margin='10px'>
                    <InputLeftAddon>
                        Name
                    </InputLeftAddon>
                    {/* <Input type='text' placeholder='Chad Chaddington' {...register("Name")}/> */}
                </InputGroup>
                <Stack justify='start' align='start' direction='row' margin='10px'>
                    <FormLabel htmlFor='Frontend'>
                        I want to learn frontend
                    </FormLabel>
                    <Switch id='Frontend'/>
                </Stack>
                <Stack justify='start' align='start' direction='row' margin='10px'>
                    <FormLabel htmlFor='Backend'>
                        I want to learn backend
                    </FormLabel>
                    <Switch id='Backend'/>
                </Stack>
                <Select placeholder='I am a...' margin='10px'>
                    <option value='freshman'>
                        Freshman
                    </option>
                    <option value='sophomore'>
                        Sophomore
                    </option>
                    <option value='junior'>
                        Junior
                    </option>
                    <option value='senior'>
                        Senior
                    </option>
                </Select>
                <p>Render: {counter++}</p>
                <Button type='submit' colorScheme='blue' margin='10px' onClick={onSubmit}>
                    Submit
                </Button>
            </FormControl>
        </Flex>
    )
};
export default ContentContainer; 