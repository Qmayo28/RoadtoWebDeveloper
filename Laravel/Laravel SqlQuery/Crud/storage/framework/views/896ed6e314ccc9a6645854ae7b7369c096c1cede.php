

<?php $__env->startSection('content'); ?>
	<div class="m-auto w-4/5 py-24">
		<div class="text-center">
			<h1 class="text-5xl uppercase bold">
				Update Car
			</h1>
		</div>


        <div class="flex justify-center pt-20">
            <form action="/cars/<?php echo e($car->id); ?>" method="POST" enctype="multipart/form-data">
                <?php echo csrf_field(); ?>
                <?php echo method_field('PUT'); ?>
                <div class="block">

                    <input
                    type="file"
                    class="block shadow-5xl mb-10 p-2 w-80 italic
                    placeholder-gray-400"
                    name="image">


                    <input
                    type="text"
                    class="block shadow-5xl mb-10 p-2 w-80 italic
                    placeholder-gray-400"
                    name="name"
                    value="<?php echo e($car->name); ?>" >

                    <input
                     type="text"
                     class="block shadow-5xl mb-10 p-2 w-80 italic
                     placeholder-gray-400"
                     name="founded"
                     value="<?php echo e($car->founded); ?>" >
        
                    <input
                     type="text"
                     class="block shadow-5xl mb-10 p-2 w-80 italic
                     placeholder-gray-400"
                     name="description"
                     value="<?php echo e($car->description); ?>" >
        
        
                    <button type="submit" class="bg-green-500 block shadow-5xl mb-10 p-2 w-80 uppercase font-bold">
                    Submit
                    </button>
        
                </div>
            </form>

            <?php if($errors->any()): ?>
                <div class="nav-container border-dotted m-auto justify-center text-center">
                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <li class=" text-red-500 list-none mt-3 mb-3 ">
                            <?php echo e($error); ?>

                        </li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            <?php endif; ?>

        </div>
	</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\MICHAEL-PC\react\Laravel\cars\cars\resources\views/cars/edit.blade.php ENDPATH**/ ?>