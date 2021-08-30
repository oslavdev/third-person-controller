import  {useState, useEffect} from 'react';

/* Character Input Controller */
const useCharacterControllerInputs = () => {
  
  const [keys, setKeys] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    space: false,
    shift: false
  });

  const _onKeyDown = (e) => {
    switch (e.keyCode) {
      case 87: // w
       setKeys({...keys, forward: true})
        break;
      case 65: // a
      setKeys({...keys, left: true})
        break;
      case 83: // s
      setKeys({...keys, right: true})
        break;
      case 68: // d
      setKeys({...keys, backward: true})
        break;
      case 32: // SPACE
      setKeys({...keys, space: true})
        break;
      case 16: // SHIFT
      setKeys({...keys, shift: true})
        break;
    }
  }

  const _onKeyUp = (e) => {
    switch (e.keyCode) {
      case 87: // w
       setKeys({...keys, forward: false})
        break;
      case 65: // a
      setKeys({...keys, left: false})
        break;
      case 83: // s
      setKeys({...keys, right: false})
        break;
      case 68: // d
      setKeys({...keys, backward: false})
        break;
      case 32: // SPACE
      setKeys({...keys, space: false})
        break;
      case 16: // SHIFT
      setKeys({...keys, shift: false})
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', (e) => _onKeyDown(e), false);
    document.addEventListener('keyup', (e) => _onKeyUp(e), false);
  }, [])
  
  return keys;
};

export default useCharacterControllerInputs;