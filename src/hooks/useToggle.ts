import { useState } from 'react';

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
    const [isToggleOn, setIsToggleOn] = useState<boolean>(initialState)

    return [isToggleOn, setIsToggleOn]
}

export default useToggle;