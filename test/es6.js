describe.skip( 'tagOf' , function () {

  it( 'symbol' , function () {
    expect( tagOf( Symbol( 'tagOf' ) ) ).to.be( 'symbol' )
    expect( tagOf( Symbol.for( 'tagOf' ) ) ).to.be( 'symbol' )
  } )

  it( 'set' , function () {
    expect( tagOf( new Set() ) ).to.be( 'set' )
    expect( tagOf( new WeakSet() ) ).to.be( 'weakset' )
  } )

  it( 'map' , function () {
    expect( tagOf( new Map() ) ).to.be( 'map' )
    expect( tagOf( new WeakMap() ) ).to.be( 'weakmap' )
  } )

} )
