import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Pruebas en el componente AddCategory', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={ () => {} } />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target : {value: 'Starwars'}}); //El evento va compuesto por target.value
        // screen.debug();
        expect(input.value).toBe('Starwars')
    })
    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'StarWars'
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target : {value: inputValue}}); //El evento va compuesto por target.value
        fireEvent.submit(form);

        expect(input.value).toBe('')

        // expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);

    })
    test('No debe de llamara el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target : {value: ''}}); //El evento va compuesto por target.value
        fireEvent.submit(form);

        expect( onNewCategory ).toHaveBeenCalledTimes(0);

    })
})