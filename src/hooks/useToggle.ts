// Hooks
import { useCallback, useState } from 'react';

const useToggle = (initialState: boolean = false): [boolean, () => void] => {
    // -------------------------------------------------
	// States
	// -------------------------------------------------
    const [isToggleOn, setIsToggleOn] = useState<boolean>(initialState)

    // -------------------------------------------------
	// Hooks
	// -------------------------------------------------
    const toggleSetter = useCallback((): void => setIsToggleOn((state) => !state), [])

    // -------------------------------------------------
	// Return
	// -------------------------------------------------
    return [isToggleOn, toggleSetter]
}

export default useToggle;