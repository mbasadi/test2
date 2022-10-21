package test2

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"test2.Hello",
		reflect.TypeOf((*Hello)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "sayHello", GoMethod: "SayHello"},
		},
		func() interface{} {
			return &jsiiProxy_Hello{}
		},
	)
}
