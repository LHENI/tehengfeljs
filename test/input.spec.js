describe('Bemenet ellenőrzése', () => {
    it('5 bevitele', () => {
        let act = isGoodInput(5);
        expect(act).toBe(true);
    });
    it('33 bevitele', () => {
        let act = isGoodInput(33);
        expect(act).toBe(true);
    });
    it('w bevitele', () => {
        let act = isGoodInput(w);
        expect(act).toBe(false);
    });
});