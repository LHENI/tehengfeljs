describe('Henger felszín számitás', () => {
    it('1,20 bevittelre 516.22 kerület',()=>{
        let act = calcSurface(1,20);
        expect(act).toBeCloseTo(131.95, 0.01);
    });
    it('20,1 bevittelre 516.22 kerület',()=>{
        let act = calcSurface(20,1);
        expect(act).toBeCloseTo(2638.94, 0.01);
    });
    it('200,10 bevittelre 516.22 kerület',()=>{
        let act = calcSurface(200,10);
        expect(act).toBeCloseTo(263893.78, 0.01);
    });
    it('30,10 bevittelre 516.22 kerület',()=>{
        let act = calcSurface(30,10);
        expect(act).toBeCloseTo(7539.82, 0.01);
    });
});