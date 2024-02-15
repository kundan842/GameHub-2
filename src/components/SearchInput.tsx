import {
  Input,
  InputGroup,
  InputLeftElement,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

// whateever has been searched need to spacified to app
// so thses can be passes as query params to gameshook which fetch  games data

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  // by getting the whole object and destructing the setSearchText method
  // will cause rednedring if any of the key of gamequery chnages , like platefirom id, genereid
  // so to avoid the unnecessary rendering direcly get the function
  //const {setSearchtext} = useGameQueryStore()
  const navigate = useNavigate();
  // on details page search is not giving result, so in case
  // we are on destails page navigate to home , theer serch result can be shown
  const setSearchText = useGameQueryStore((s) => s.setSearchtext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
