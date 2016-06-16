var root = typeof global === 'object' ? global : this

describe( 'tagOf' , function () {

  var tagOf = root.tagOf

  it( 'symbol' , function () {
    if ( typeof Symbol === 'function' ) {
      expect( tagOf( Symbol( 'tagOf' ) ) ).toBe( 'symbol' )
      expect( tagOf( Symbol[ 'for' ]( 'tagOf' ) ) ).toBe( 'symbol' )
    }
  } )

  it( 'set' , function () {
    if ( typeof Set === 'function' && typeof WeakSet === 'function' ) {
      expect( tagOf( new Set() ) ).toBe( 'set' )
      expect( tagOf( new WeakSet() ) ).toBe( 'weakset' )
    }
  } )

  it( 'map' , function () {
    if ( typeof Map === 'function' && typeof WeakMap === 'function' ) {
      expect( tagOf( new Map() ) ).toBe( 'map' )
      expect( tagOf( new WeakMap() ) ).toBe( 'weakmap' )
    }
  } )

} )
