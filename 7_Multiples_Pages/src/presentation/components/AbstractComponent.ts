export abstract class AbstractComponent {

    protected injectPoint?: string

    constructor(injectPoint?: string) {
        this.injectPoint = injectPoint
    }

    abstract buildTemplate(): string 

    protected getInjectPoint(): string {
        return this.injectPoint ? `#${this.injectPoint}` : 'body'
    }
    
    render(): void {
        const injectPoint = this.getInjectPoint()

        document.querySelector(injectPoint)
          .insertAdjacentHTML('beforebegin', this.buildTemplate())
    
        if (injectPoint !== 'body') {
          document.querySelector(injectPoint).remove()
        }
    }

}