<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;
use App\Rules\Uppercase;
use App\Http\Requests\CreateValidationRequest;

class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //Select * From cars
        $cars = Car::all();

        return view('cars.index', [
            'cars' =>$cars
            ]);

       
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('cars.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $cars = new Car;
        // $cars->name = $request->input('name');
        // $cars->founded = $request->input('founded');
        // $cars->description = $request->input('description');
        // $cars->user_id = auth()->user()->$request->id;
        // $cars->save();

        // dd($request->all());

        $request->validate([
            // 'name' => 'required|unique:cars',
            'name' => new Uppercase,
            'founded' => 'required|integer|min:0|max:2021',
            'description' => 'required',
            'image' => 'required|mimes:jps,png,jpeg|max:5048'
        ]);

        $newImageName = time() . '-' . $request->name . '-' .
        $request->image->extension();

        $request->image->move(public_path('image'), $newImageName);

        // $request->validated(); put this on params CreateValidationRequest

        $cars = Car::create([
            'name' => $request->input('name'),
            'founded' => $request->input('founded'),
            'description' => $request->input('description'),
            'user_id' => auth()->user()->id,
            'image_path' => $newImageName
        ]);

       
        
        //If its valid,it will proceed
        //If its not valid, throw a validation

        return redirect('/cars');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cars = Car::find($id);

        // dd($cars->engines);

        return view('cars.show')->with('car',$cars);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $cars = Car::find($id);

        return view('cars.edit')->with('car',$cars );

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update( CreateValidationRequest  $request, $id)
    {
        $request->validated();

        $newImageName = time() . '-' . $request->name . '-' .
        $request->image->extension();

        $request->image->move(public_path('image'), $newImageName);



        $cars = Car::where('id', $id)
                ->update([
                'name' => $request->input('name'),
                'founded' => $request->input('founded'),
                'description' => $request->input('description'),
                'image_path' => $newImageName
        ]);

        return redirect('/cars');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cars = Car::find($id);
        $cars->delete();

        return redirect('/cars');
    }
}
