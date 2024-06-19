import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas GifGrid', () => { 
    const category = 'StarWars'
    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })


        render( <GifGrid category={category}/> )
        screen.debug()
        expect(screen.getByText('Cargando...')).toBeTruthy();
    })
    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'sajkdh',
                title: 'Mavs',
                url: 'https://localhost:3000'
            },
            {
                id: 'sdjkf',
                title: 'Stars',
                url: 'https://localhost:3400'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
        render( <GifGrid category={category}/> )
        screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2)

    })
 })