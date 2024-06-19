import { render, renderHook } from "@testing-library/react"
import { GiftExpertApp } from "../src/GiftExpertApp"

describe('Pruebas de GifExpertApp', () => { 
    const category = 'Star Wars'
    test('Deberia  ', () => {
        render(<GiftExpertApp />)
    })
})