var root = typeof global === 'object' ? global : this

describe( 'tagOf' , function () {

  var tagOf = root.tagOf

  it( 'null' , function () {
    expect( tagOf( null ) ).toBe( 'null' )
  } )

  it( 'undefined' , function () {
    expect( tagOf( void 0 ) ).toBe( 'undefined' )
  } )

  it( 'number' , function () {
    expect( tagOf( 0 ) ).toBe( 'number' )
    expect( tagOf( 0 / 0 ) ).toBe( 'number' )
    expect( tagOf( +1 / 0 ) ).toBe( 'number' )
    expect( tagOf( -1 / 0 ) ).toBe( 'number' )
    expect( tagOf( new Number( 0 ) ) ).toBe( 'number' )
    expect( tagOf( new Number( 0 / 0 ) ) ).toBe( 'number' )
    expect( tagOf( new Number( +1 / 0 ) ) ).toBe( 'number' )
    expect( tagOf( new Number( -1 / 0 ) ) ).toBe( 'number' )
  } )

  it( 'string' , function () {
    expect( tagOf( '' ) ).toBe( 'string' )
    expect( tagOf( new String( '' ) ) ).toBe( 'string' )
  } )

  it( 'boolean' , function () {
    expect( tagOf( true ) ).toBe( 'boolean' )
    expect( tagOf( false ) ).toBe( 'boolean' )
    expect( tagOf( new Boolean( true ) ) ).toBe( 'boolean' )
    expect( tagOf( new Boolean( false ) ) ).toBe( 'boolean' )
  } )

  it( 'object' , function () {
    expect( tagOf( {} ) ).toBe( 'object' )
    expect( tagOf( new Object() ) ).toBe( 'object' ) // eslint-disable-line no-new-object
    expect( tagOf( new function () {} ) ).toBe( 'object' )
  } )

  it( 'array' , function () {
    expect( tagOf( [] ) ).toBe( 'array' )
    expect( tagOf( new Array() ) ).toBe( 'array' ) // eslint-disable-line no-array-constructor
  } )

  it( 'function' , function () {
    expect( tagOf( function () {} ) ).toBe( 'function' )
    expect( tagOf( new Function() ) ).toBe( 'function' ) // eslint-disable-line no-new-func
  } )

  it( 'date' , function () {
    expect( tagOf( new Date() ) ).toBe( 'date' )
  } )

  it( 'error' , function () {
    expect( tagOf( new Error() ) ).toBe( 'error' )
    // expect( tagOf( new EvalError() ) ).toBe( 'evalerror' )
    // expect( tagOf( new RangeError() ) ).toBe( 'rangeerror' )
    // expect( tagOf( new ReferenceError() ) ).toBe( 'referenceerror' )
    // expect( tagOf( new SyntaxError() ) ).toBe( 'syntaxerror' )
    // expect( tagOf( new TypeError() ) ).toBe( 'typeerror' )
    // expect( tagOf( new URIError() ) ).toBe( 'urierror' )
  } )

  it( 'regexp' , function () {
    expect( tagOf( /^/i ) ).toBe( 'regexp' )
    expect( tagOf( new RegExp() ) ).toBe( 'regexp' )
  } )

} )
