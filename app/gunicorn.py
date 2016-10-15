import multiprocessing

bind = "127.0.0.1:33420"
workers = multiprocessing.cpu_count() + 1
#workers = 1
worker_class = "egg:meinheld#gunicorn_worker"

preload_app = True
